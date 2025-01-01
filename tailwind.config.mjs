/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background-light': 'rgb(30 64 175)',
        'background-dark': '#222',
      },
      animation: {
        'gradient-move': 'gradient-move 3s linear infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
    },
  },
  plugins: [],
}
