import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Custom colors inspired by Neverhack/Vercel if needed
                dark: {
                    DEFAULT: "#000000",
                    900: "#0a0a0a",
                    800: "#171717",
                }
            }
        },
    },
    darkMode: "class",
    plugins: [nextui(), require('@tailwindcss/typography')],
}
