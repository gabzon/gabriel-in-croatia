// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),

  env: {
    schema: {
      CONVERTKIT_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    }
  }
});