import { defineConfig } from "astro/config";
import preact from '@astrojs/preact';

export default defineConfig({
  site: "https://kinos-astro-tutorial.netlify.app/",
  integrations: [preact()],
});
