// Star field background in plain WebGL: the same shaders and scene as before with
// three.js, but without loading the whole library for three draw calls.

const vertexShader = /* glsl */ `
  attribute vec3 position;
  attribute float aSpeed;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTravel;
  uniform float uDepth;
  uniform float uNear;
  uniform float uSize;
  uniform float uScale;

  varying float vFade;

  void main() {
    // Stars move along +z and wrap around, so the whole flight happens on the GPU.
    float span = uDepth + uNear;
    float z = mod(position.z + uTravel * aSpeed, span) - uDepth;

    vec4 mvPosition = modelViewMatrix * vec4(position.xy, z, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * uScale / -mvPosition.z;

    // Fade stars in at the far end and out right before they pass the camera.
    vFade = smoothstep(-uDepth, -uDepth + 60.0, z) * (1.0 - smoothstep(uNear - 4.0, uNear, z));
  }
`;

// Linear to sRGB output conversion, as three.js appends it for an sRGB canvas.
const outputColorSpace = /* glsl */ `
  precision highp float;

  vec4 linearToOutputTexel(vec4 value) {
    return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.a);
  }
`;

const fragmentShader = /* glsl */ `
  ${outputColorSpace}

  uniform sampler2D uMap;
  uniform vec3 uColor;

  varying float vFade;

  void main() {
    vec4 texel = texture2D(uMap, gl_PointCoord);
    float alpha = texel.a * vFade;
    if (alpha < 0.08) discard;
    gl_FragColor = linearToOutputTexel(vec4(uColor * texel.rgb, alpha));
  }
`;

const quadVertexShader = /* glsl */ `
  attribute vec3 position;
  attribute vec2 uv;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// The planet is drawn on a camera-facing quad, so it stays perfectly round even
// near the edge of the screen where a real sphere would be stretched by perspective.
const planetFragmentShader = /* glsl */ `
  ${outputColorSpace}

  uniform float uExtent;
  uniform float uRotation;
  uniform float uOpacity;
  uniform vec3 uSurfaceDark;
  uniform vec3 uSurfaceLight;
  uniform vec3 uRimA;
  uniform vec3 uRimB;
  uniform float uBandFrequency;
  uniform float uSeed;
  uniform vec3 uLightDirection;

  varying vec2 vUv;

  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
      mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y),
      f.z
    );
  }

  vec3 rotateY(vec3 p, float a) {
    float c = cos(a);
    float s = sin(a);
    return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  }

  vec3 rotateZ(vec3 p, float a) {
    float c = cos(a);
    float s = sin(a);
    return vec3(c * p.x - s * p.y, s * p.x + c * p.y, p.z);
  }

  void main() {
    vec2 p = (vUv - 0.5) * 2.0 * uExtent;
    float r = length(p);
    vec3 light = normalize(uLightDirection);

    // Thin atmosphere glow around the lit side.
    if (r > 1.0) {
      float facing = clamp(dot(normalize(p), normalize(light.xy)) * 0.5 + 0.5, 0.0, 1.0);
      float glow = exp(-(r - 1.0) * 28.0) * (0.08 + 0.5 * facing * facing);
      float alpha = glow * 0.45 * uOpacity;
      if (alpha < 0.02) discard;
      gl_FragColor = linearToOutputTexel(vec4(mix(uRimA, uRimB, facing), alpha));
      return;
    }

    vec3 normal = vec3(p, sqrt(1.0 - r * r));
    vec3 q = rotateY(rotateZ(normal, -0.35), uRotation);

    // Soft gas-giant bands, distorted by noise.
    vec3 seed = vec3(uSeed, uSeed * 1.7, uSeed * 2.3);
    float bands = sin(q.y * uBandFrequency + noise(q * 2.5 + seed) * 3.0) * 0.5 + 0.5;
    bands = mix(bands, noise(q * 7.0 + seed), 0.35);
    vec3 surface = mix(uSurfaceDark, uSurfaceLight, bands);

    float diffuse = max(dot(normal, light), 0.0);
    float rim = pow(1.0 - normal.z, 3.0);
    vec3 rimColor = mix(uRimA, uRimB, clamp(dot(normalize(p + 1e-4), normalize(light.xy)) * 0.5 + 0.5, 0.0, 1.0));

    vec3 color = surface * (0.06 + 0.94 * diffuse) + rimColor * rim * diffuse * 0.55;
    float edge = 1.0 - smoothstep(0.985, 1.0, r);
    gl_FragColor = linearToOutputTexel(vec4(color, edge * uOpacity));
  }
`;

const shootingStarFragmentShader = /* glsl */ `
  ${outputColorSpace}

  uniform float uOpacity;

  varying vec2 vUv;

  void main() {
    // Bright head on the right, tail fading out to the left, soft across its width.
    float along = pow(vUv.x, 2.5);
    float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
    float alpha = along * across * across * uOpacity;
    gl_FragColor = linearToOutputTexel(vec4(vec3(0.9, 0.94, 1.0), alpha));
  }
`;

type Vec3 = [number, number, number];
type Mat4 = Float32Array;

const perspective = (fov: number, aspect: number, near: number, far: number): Mat4 => {
  const f = 1 / Math.tan((fov * Math.PI) / 360);
  const m = new Float32Array(16);
  m[0] = f / aspect;
  m[5] = f;
  m[10] = (far + near) / (near - far);
  m[11] = -1;
  m[14] = (2 * far * near) / (near - far);
  return m;
};

const normalize = (v: Vec3): Vec3 => {
  const length = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / length, v[1] / length, v[2] / length];
};

const cross = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

// View matrix of a camera at `eye` looking at `target` with +y up.
const lookAt = (eye: Vec3, target: Vec3): Mat4 => {
  const z = normalize([eye[0] - target[0], eye[1] - target[1], eye[2] - target[2]]);
  const x = normalize(cross([0, 1, 0], z));
  const y = cross(z, x);
  const dot = (a: Vec3) => a[0] * eye[0] + a[1] * eye[1] + a[2] * eye[2];
  return new Float32Array([x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x), -dot(y), -dot(z), 1]);
};

// Model matrix translate * rotateZ * scale, multiplied onto the view matrix.
const modelView = (view: Mat4, position: Vec3, rotationZ: number, scaleX: number, scaleY: number): Mat4 => {
  const c = Math.cos(rotationZ);
  const s = Math.sin(rotationZ);
  const model = [c * scaleX, s * scaleX, 0, 0, -s * scaleY, c * scaleY, 0, 0, 0, 0, 1, 0, position[0], position[1], position[2], 1];
  const out = new Float32Array(16);
  for (let column = 0; column < 4; column += 1) {
    for (let row = 0; row < 4; row += 1) {
      let sum = 0;
      for (let k = 0; k < 4; k += 1) sum += view[k * 4 + row] * model[column * 4 + k];
      out[column * 4 + row] = sum;
    }
  }
  return out;
};

const srgbToLinear = (c: number) => (c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4));

const createStarCanvas = () => {
  const starCanvas = document.createElement("canvas");
  starCanvas.width = 64;
  starCanvas.height = 64;
  const context = starCanvas.getContext("2d");
  if (!context) return null;

  const gradient = context.createRadialGradient(32, 32, 2, 32, 32, 30);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.35, "rgba(210, 225, 255, 0.92)");
  gradient.addColorStop(0.7, "rgba(170, 195, 255, 0.45)");
  gradient.addColorStop(1, "rgba(170, 195, 255, 0)");

  context.fillStyle = gradient;
  context.beginPath();
  context.arc(32, 32, 30, 0, Math.PI * 2);
  context.fill();

  return starCanvas;
};

// Planet colour schemes as [dark surface, light surface, rim A, rim B] in linear RGB.
const planetPalettes: Vec3[][] = [
  [[0.005, 0.006, 0.016], [0.03, 0.022, 0.07], [0.66, 0.33, 0.97], [0.13, 0.83, 0.93]], // violet / cyan
  [[0.02, 0.008, 0.004], [0.09, 0.035, 0.012], [0.98, 0.55, 0.2], [0.95, 0.3, 0.25]], // amber / rust
  [[0.003, 0.014, 0.012], [0.012, 0.06, 0.05], [0.2, 0.9, 0.7], [0.25, 0.6, 0.95]], // teal / emerald
  [[0.008, 0.012, 0.025], [0.05, 0.07, 0.11], [0.6, 0.8, 1.0], [0.85, 0.9, 1.0]], // icy blue
  [[0.016, 0.004, 0.012], [0.07, 0.02, 0.05], [0.95, 0.35, 0.65], [0.65, 0.35, 0.97]], // rose / magenta
];

type Program = {
  program: WebGLProgram;
  uniform: (name: string) => WebGLUniformLocation | null;
  attribute: (name: string) => number;
};

export const mount = (root: HTMLElement, canvas: HTMLCanvasElement) => {
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.2 : 1.5);

  const gl = canvas.getContext("webgl", { antialias: !mobile, alpha: false, stencil: false });
  if (!gl) {
    console.warn("WebGL context could not be created");
    return;
  }

  const shaders: WebGLShader[] = [];
  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("Shader could not be created");
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? "Shader error");
    shaders.push(shader);
    return shader;
  };

  const createProgram = (vertex: string, fragment: string): Program => {
    const program = gl.createProgram();
    if (!program) throw new Error("Program could not be created");
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? "Link error");
    const uniforms = new Map<string, WebGLUniformLocation | null>();
    return {
      program,
      uniform: (name) => {
        if (!uniforms.has(name)) uniforms.set(name, gl.getUniformLocation(program, name));
        return uniforms.get(name) ?? null;
      },
      attribute: (name) => gl.getAttribLocation(program, name),
    };
  };

  let starProgram: Program;
  let planetProgram: Program;
  let shootingStarProgram: Program;
  try {
    starProgram = createProgram(vertexShader, fragmentShader);
    planetProgram = createProgram(quadVertexShader, planetFragmentShader);
    shootingStarProgram = createProgram(quadVertexShader, shootingStarFragmentShader);
  } catch (error) {
    console.warn("WebGL star field could not be created", error);
    return;
  }

  const buffers: WebGLBuffer[] = [];
  const createBuffer = (data: Float32Array) => {
    const buffer = gl.createBuffer();
    if (!buffer) throw new Error("Buffer could not be created");
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    buffers.push(buffer);
    return buffer;
  };

  const bindAttribute = (program: Program, name: string, buffer: WebGLBuffer, size: number) => {
    const location = program.attribute(name);
    if (location < 0) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
  };

  const fov = 58;
  let aspect = 1;
  let projection = perspective(fov, aspect, 0.1, 700);
  const cameraPosition: Vec3 = [0, 0, 10];
  let view = lookAt(cameraPosition, [0, 0, -40]);

  const starCount = mobile ? 1400 : 2800;
  const fieldWidth = 170;
  const fieldHeight = 150;
  const fieldDepth = 320;
  const near = 8;

  const positions = new Float32Array(starCount * 3);
  const speeds = new Float32Array(starCount);

  for (let i = 0; i < starCount; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * fieldWidth;
    positions[i * 3 + 1] = (Math.random() - 0.5) * fieldHeight;
    positions[i * 3 + 2] = Math.random() * (fieldDepth + near);
    speeds[i] = mobile ? 3.6 + Math.random() * 5.4 : 5 + Math.random() * 8;
  }

  const starCanvas = createStarCanvas();
  if (!starCanvas) return;

  const starPositions = createBuffer(positions);
  const starSpeeds = createBuffer(speeds);

  const starTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, starTexture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, starCanvas);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.generateMipmap(gl.TEXTURE_2D);

  const starColor = [0xe6, 0xef, 0xff].map((c) => srgbToLinear(c / 255));
  const stars = {
    travel: 0,
    size: mobile ? 0.24 : 0.31,
    scale: 1,
  };

  // Quads as triangle strips with uv (0,0) at the bottom left.
  const quad = (left: number, right: number, bottom: number, top: number) =>
    new Float32Array([left, top, 0, right, top, 0, left, bottom, 0, right, bottom, 0]);
  const quadUv = createBuffer(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]));

  // A planet that now and then appears far away and drifts past while we fly towards it.
  const planetExtent = 1.25; // quad size relative to the planet radius, leaves room for the glow
  const planetPositions = createBuffer(quad(-planetExtent, planetExtent, -planetExtent, planetExtent));
  const planet = {
    visible: false,
    position: [0, 0, 0] as Vec3,
    scale: 1,
    rotation: 0,
    surfaceDark: [0, 0, 0] as Vec3,
    surfaceLight: [0, 0, 0] as Vec3,
    rimA: [0, 0, 0] as Vec3,
    rimB: [0, 0, 0] as Vec3,
    bandFrequency: 12,
    seed: 0,
    opacity: 0,
  };

  // A single reusable shooting star that shows up every now and then, origin at the head.
  const shootingStarPositions = createBuffer(quad(-1, 0, -0.5, 0.5));
  const shootingStar = {
    visible: false,
    position: [0, 0, 0] as Vec3,
    rotation: 0,
    scaleX: 1,
    opacity: 0,
  };

  const shootingStarDepth = 120;
  const shot = { start: 0, duration: 0, from: [0, 0, 0] as Vec3, direction: [0, 0, 0] as Vec3, speed: 0, length: 0 };
  let nextShot = 4 + Math.random() * 4;

  const spawnShootingStar = (now: number) => {
    const halfHeight = Math.tan((fov * Math.PI) / 360) * (shootingStarDepth + cameraPosition[2]);
    const halfWidth = halfHeight * aspect;
    const goingLeft = Math.random() < 0.5;
    const angle = (0.35 + Math.random() * 0.25) * (goingLeft ? 1 : -1);
    shot.from = [
      (goingLeft ? 0.2 + Math.random() * 0.6 : -0.8 + Math.random() * 0.6) * halfWidth,
      (0.3 + Math.random() * 0.55) * halfHeight,
      -shootingStarDepth,
    ];
    shot.direction = [goingLeft ? -Math.cos(angle) : Math.cos(angle), -Math.abs(Math.sin(angle)), 0];
    shot.speed = halfWidth * (0.9 + Math.random() * 0.5);
    shot.length = halfWidth * (0.12 + Math.random() * 0.08);
    shot.duration = 0.9 + Math.random() * 0.4;
    shot.start = now;
    shootingStar.rotation = Math.atan2(shot.direction[1], shot.direction[0]);
    shootingStar.visible = true;
  };

  const updateShootingStar = (now: number) => {
    if (!shootingStar.visible) {
      if (now >= nextShot) spawnShootingStar(now);
      return;
    }
    const t = (now - shot.start) / shot.duration;
    if (t >= 1) {
      shootingStar.visible = false;
      nextShot = now + 10 + Math.random() * 10;
      return;
    }
    const travelled = shot.speed * shot.duration * t;
    shootingStar.position = [
      shot.from[0] + shot.direction[0] * travelled,
      shot.from[1] + shot.direction[1] * travelled,
      shot.from[2] + shot.direction[2] * travelled,
    ];
    // The tail grows quickly, then the whole streak fades out.
    shootingStar.scaleX = shot.length * Math.min(t * 4, 1);
    shootingStar.opacity = Math.sin(Math.PI * Math.min(t * 1.4, 1));
  };

  const flyBy = {
    active: false,
    progress: 0,
    duration: 0,
    nextAt: 8 + Math.random() * 6,
    palette: -1,
    startDepth: 520,
    endDepth: 30,
    x: 0,
    y: 0,
  };

  const startFlyBy = () => {
    // Start slightly off-centre in a random direction; perspective then carries it
    // outwards along that direction as it gets closer.
    const direction = Math.random() * Math.PI * 2;
    const offset = 0.08 + Math.random() * 0.14;
    const halfHeight = Math.tan((fov * Math.PI) / 360) * (flyBy.startDepth + cameraPosition[2]);
    flyBy.x = Math.cos(direction) * offset * halfHeight * aspect;
    flyBy.y = Math.sin(direction) * offset * halfHeight;

    // Every planet looks a little different: size, colours, bands and spin.
    planet.scale = 3 + Math.random() * 5;
    flyBy.palette = (flyBy.palette + 1 + Math.floor(Math.random() * (planetPalettes.length - 1))) % planetPalettes.length;
    [planet.surfaceDark, planet.surfaceLight, planet.rimA, planet.rimB] = planetPalettes[flyBy.palette];
    planet.bandFrequency = 6 + Math.random() * 14;
    planet.seed = Math.random() * 100;
    planet.rotation = Math.random() * Math.PI * 2;
    flyBy.duration = 45 + Math.random() * 15;
    flyBy.progress = 0;
    flyBy.active = true;
    planet.visible = true;
  };

  const updateFlyBy = (now: number, step: number) => {
    if (!flyBy.active) {
      if (now < flyBy.nextAt) return;
      startFlyBy();
    }
    flyBy.progress += step / flyBy.duration;
    if (flyBy.progress >= 1) {
      flyBy.active = false;
      planet.visible = false;
      flyBy.nextAt = now + 40 + Math.random() * 40;
      return;
    }
    const depth = flyBy.startDepth + (flyBy.endDepth - flyBy.startDepth) * flyBy.progress;
    planet.position = [flyBy.x, flyBy.y, -depth];
    planet.opacity = Math.min(flyBy.progress * 8, 1);
  };

  const useProgram = (program: Program, modelViewMatrix: Mat4) => {
    gl.useProgram(program.program);
    gl.uniformMatrix4fv(program.uniform("modelViewMatrix"), false, modelViewMatrix);
    gl.uniformMatrix4fv(program.uniform("projectionMatrix"), false, projection);
  };

  const render = () => {
    gl.clearColor(0x05 / 255, 0x07 / 255, 0x0f / 255, 1);
    gl.depthMask(true);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.BLEND);
    gl.blendEquation(gl.FUNC_ADD);

    // Drawn first and writing depth, so stars behind it are hidden while it passes through the field.
    if (planet.visible) {
      const p = planetProgram;
      useProgram(p, modelView(view, planet.position, 0, planet.scale, planet.scale));
      gl.uniform1f(p.uniform("uExtent"), planetExtent);
      gl.uniform1f(p.uniform("uRotation"), planet.rotation);
      gl.uniform1f(p.uniform("uOpacity"), planet.opacity);
      gl.uniform3fv(p.uniform("uSurfaceDark"), planet.surfaceDark);
      gl.uniform3fv(p.uniform("uSurfaceLight"), planet.surfaceLight);
      gl.uniform3fv(p.uniform("uRimA"), planet.rimA);
      gl.uniform3fv(p.uniform("uRimB"), planet.rimB);
      gl.uniform1f(p.uniform("uBandFrequency"), planet.bandFrequency);
      gl.uniform1f(p.uniform("uSeed"), planet.seed);
      gl.uniform3f(p.uniform("uLightDirection"), -0.65, 0.55, 0.5);
      bindAttribute(p, "position", planetPositions, 3);
      bindAttribute(p, "uv", quadUv, 2);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    gl.depthMask(false);

    // Transparent objects back to front: the shooting star lies behind the star field's origin.
    if (shootingStar.visible) {
      const p = shootingStarProgram;
      useProgram(p, modelView(view, shootingStar.position, shootingStar.rotation, shootingStar.scaleX, 0.3));
      gl.uniform1f(p.uniform("uOpacity"), shootingStar.opacity);
      bindAttribute(p, "position", shootingStarPositions, 3);
      bindAttribute(p, "uv", quadUv, 2);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    const p = starProgram;
    useProgram(p, view);
    gl.uniform1f(p.uniform("uTravel"), stars.travel);
    gl.uniform1f(p.uniform("uDepth"), fieldDepth);
    gl.uniform1f(p.uniform("uNear"), near);
    gl.uniform1f(p.uniform("uSize"), stars.size);
    gl.uniform1f(p.uniform("uScale"), stars.scale);
    gl.uniform3fv(p.uniform("uColor"), starColor);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, starTexture);
    gl.uniform1i(p.uniform("uMap"), 0);
    bindAttribute(p, "position", starPositions, 3);
    bindAttribute(p, "aSpeed", starSpeeds, 1);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.drawArrays(gl.POINTS, 0, starCount);

    // Leave attribute slots clean for the next program.
    for (let i = 0; i < 3; i += 1) gl.disableVertexAttribArray(i);
  };

  const resize = () => {
    const { clientWidth, clientHeight } = root;
    if (!clientWidth || !clientHeight) return;
    canvas.width = Math.floor(clientWidth * pixelRatio);
    canvas.height = Math.floor(clientHeight * pixelRatio);
    gl.viewport(0, 0, canvas.width, canvas.height);
    aspect = clientWidth / clientHeight;
    projection = perspective(fov, aspect, 0.1, 700);
    stars.scale = (clientHeight * pixelRatio) / 2;
  };

  const pointer = { x: 0, y: 0 };
  const look = { x: 0, y: 0 };
  let warp = 0;
  let lastScrollY = window.scrollY;

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  let currentTime = 0;
  let elapsed = 0;
  let raf = 0;
  let running = false;

  const tick = (time: DOMHighResTimeStamp) => {
    const dt = Math.max(0, Math.min((time - currentTime) / 1000, 1 / 30));
    currentTime = time;
    elapsed += dt;

    // Scrolling briefly speeds up the flight ("warp"), then eases back.
    const scrollDelta = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    const warpTarget = Math.min(scrollDelta / Math.max(dt, 1e-3) / 350, 5);
    warp += (warpTarget - warp) * (1 - Math.exp(-dt * (warpTarget > warp ? 6 : 2)));

    stars.travel += dt * (1 + warp);

    // The planet spins slowly and, like the stars, comes closer faster during a warp.
    planet.rotation += dt * 0.08;
    updateFlyBy(elapsed, dt * (1 + warp));

    updateShootingStar(elapsed);

    // Slow idle drift plus a subtle parallax towards the mouse.
    const ease = 1 - Math.exp(-dt * 2.5);
    look.x += (pointer.x - look.x) * ease;
    look.y += (pointer.y - look.y) * ease;
    cameraPosition[0] = Math.sin(elapsed * 0.14) * 0.12 + look.x * 0.9;
    cameraPosition[1] = Math.sin(elapsed * 0.11) * 0.08 - look.y * 0.6;
    view = lookAt(cameraPosition, [cameraPosition[0] * 0.4, cameraPosition[1] * 0.4, -40]);

    render();
    raf = window.requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    running = true;
    currentTime = performance.now();
    lastScrollY = window.scrollY;
    raf = window.requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    window.cancelAnimationFrame(raf);
  };

  const onVisibilityChange = () => (document.hidden ? stop() : start());
  const onPageShow = (event: PageTransitionEvent) => event.persisted && start();

  const onPageHide = (event: PageTransitionEvent) => {
    stop();
    // Pages kept in the back/forward cache come back via "pageshow" and must stay intact.
    if (event.persisted) return;
    document.removeEventListener("visibilitychange", onVisibilityChange);
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pageshow", onPageShow);
    window.removeEventListener("pagehide", onPageHide);
    for (const buffer of buffers) gl.deleteBuffer(buffer);
    for (const shader of shaders) gl.deleteShader(shader);
    for (const { program } of [starProgram, planetProgram, shootingStarProgram]) gl.deleteProgram(program);
    gl.deleteTexture(starTexture);
  };

  resize();
  start();

  document.addEventListener("visibilitychange", onVisibilityChange);
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pageshow", onPageShow);
  window.addEventListener("pagehide", onPageHide);
};
