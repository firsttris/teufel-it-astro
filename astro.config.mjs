import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://teufel-it.de/',
  integrations: [tailwind(), icon({
    include: {
      mdi: ['email', 'menu', 'close', 'arrow-right', 'file-account' ],
      'simple-icons': ['github', 'linkedin'],

    },
  }), mdx()]
});