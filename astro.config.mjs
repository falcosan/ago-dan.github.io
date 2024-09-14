import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: "ignore",
  site: "https://ago-dan.com",
  integrations: [sitemap(), react()],
});
