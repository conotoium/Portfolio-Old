import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://conotoium.github.io/Portfolio/',
  base: 'Portfolio',
  security: {
    checkOrigin: true
  },
  integrations: [tailwind(), react(), robotsTxt()],
  output: "static",
  adapter: node({
    mode: "standalone"
  })
});