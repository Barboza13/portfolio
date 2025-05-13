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
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        'gradient-move': '200% 200%',
      },
      boxShadow: {
        'presentation-shadow': 'inset 0 0 100px rgba(0, 0, 0, 1)',
        'profile-shadow': '0 0 15px rgba(255, 255, 255, .5)',
      },
    },
  },
  plugins: [],
}
