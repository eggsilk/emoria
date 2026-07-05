// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. If the repo is renamed or a custom domain
  // (e.g. emoria.de) is added, update `site` and `base` accordingly.
  site: 'https://eggsilk.github.io',
  base: '/emoria/',
  vite: {
    plugins: [tailwindcss()],
  },
});
