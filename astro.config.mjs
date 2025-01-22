import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://teufel-it.de/',
  integrations: [tailwind(), icon({
    include: {
      openmoji: [
        'mobile-phone',
        'closed-mailbox-with-raised-flag',
        'bookmark-tabs',
        'github',
        'linkedin',
        'globe-with-meridians'
      ]
    },
  })]
});