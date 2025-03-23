import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    trailingSlash: "never",
    site: "https://p80-demos.dutchwebworks.nl",
    integrations: [tailwind()],
});
