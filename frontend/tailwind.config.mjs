// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Используем 'class' для работы с next-themes
  theme: {
    extend: {
      boxShadow: {
        'inner-custom-dark': 'inset 0 2px 20px 3px #1C1E22FF, inset 0 2px 4px -2px #1C1E22FF',
        'inner-custom-light': 'inset 0 2px 20px 3px #f4f5f8, inset 0 2px 4px -2px #f4f5f8',
      },
      dropShadow: {
        'xlo': '0 15px 15px rgba(86,58,13,0.2)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],

      },
      colors: {
        'primary-orange': '#ffaa17',
        'old-white': 'rgba(204,206,194,1)',
        'old-white-50': 'rgba(204,206,194,.5)',
        'old-white-light': 'rgba(228,231,220,1)',
        'primary-orange-85': 'rgba(255,170,23,0.85)',
        'deep-black-orange': '#1c1403',
        'deep-black': '#17191c',
        'thm-foreground': '#0a0a0a',
        'background-dark-orange': 'rgba(86,58,13,0.9)',
        // colors for light theme
        'thm-background-light': '#f4f5f8',
        'thm-background-light-90': 'rgba(244,245,248,0.9)',
        'thm-foreground-light': '#0a0a0a',
        // colors for dark theme
        'thm-background-dark': '#1c1e22',
        'thm-background-dark-2': '#4f525b',
        'thm-background-dark-90': 'rgba(51,53,58,0.9)',
        'thm-foreground-dark': '#ededed',
      },
      fontFamily: {
        family_heading: ['var(--font-teko)'],
        family_body: ['var(--font-rubik)'],
      },
      fontSize: {
        'h1': ['140px', '120px'],
        'h2': ['70px', '70px'],
        'h3': ['60px', '50px'],
        'h4': ['40px', '40px'],
        'h5': ['30px', '30px'],
        'h6': ['26px', '26px'],
        'p': ['16px', '16px']
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) 1',
        'ping-fast': 'ping 0.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient-x': 'gradient-x 0.3s ease infinite',
        'flicker': 'flicker 3s infinite ease-in-out',
        'scale-up': 'scaleUp 1s ease-in-out forwards',
        'scale-down': 'scaleDown 1s ease-in-out forwards',
        'float': "float 9s ease-in-out infinite",
        'spin360': 'spin360 400s linear infinite',

      },
      keyframes: {
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        'gradient-x': {
          '0%': { 'background-position': '0% 100%' },
          '25%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '-100% -100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.7)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.7)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), require('@tailwindcss/aspect-ratio'),
  ],
};