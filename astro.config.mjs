import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://conotoium.github.io/Portfolio/',
  base: 'Portfolio',
  security: {
    checkOrigin: true
  },
  integrations: [tailwind(), react()],
  output: "static",
  adapter: node({
    mode: "standalone"
  })
});