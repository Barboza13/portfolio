/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background-light': 'rgb(30 64 175)',
        'background-dark': '#222',
      },
    },
  },
  plugins: [],
}
