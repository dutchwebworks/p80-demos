import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://p80-demos.dutchwebworks.nl",
    compressHTML: false,
    trailingSlash: "never"
});