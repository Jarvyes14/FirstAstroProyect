// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Jarvyes14.github.io',
  output: 'static',
  integrations: [tailwind(), react()],
  base: '/Portfolio',
});