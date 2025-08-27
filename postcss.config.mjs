import autoprefixer from 'autoprefixer';
import tailwindcssPostcss from '@tailwindcss/postcss';

export default {
    plugins: [
        tailwindcssPostcss({ config: './tailwind.config.mjs' }),
        autoprefixer,
    ],
};