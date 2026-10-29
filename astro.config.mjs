import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://teufel-it.de/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon({
    include: {
      mdi: ['email', 'file-account', 'application-cog-outline', 'source-branch-refresh', 'robot-outline', 'book-open-page-variant-outline'],
      'simple-icons': ['github', 'linkedin'],
    },
  })]
});
