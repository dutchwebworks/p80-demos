import { defineConfig } from "tailwindcss";

export default defineConfig({
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}", "./public/**/*.html"],
    theme: {
        extend: {},
    },
    plugins: [],
});
