/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#fdf6ec',
          soft: '#f8edda',
          rich: '#f1e2c8',
        },
        ink: {
          DEFAULT: '#19120d',
          soft: '#352922',
          muted: '#5a4b3f',
        },
        accent: {
          DEFAULT: '#ff5a3d',
          dark: '#d9492f',
        },
        highlight: {
          DEFAULT: '#ffe761',
          mint: '#c7f26c',
          sky: '#a8c6ff',
        },
      },
      letterSpacing: {
        mega: '0.28em',
        ultra: '0.38em',
        tightest: '-0.05em',
      },
      boxShadow: {
        frame: '-16px 16px 0 rgba(25, 18, 13, 0.12)',
      },
      borderWidth: {
        12: '12px',
        14: '14px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
