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
        brand: {
          light: '#f7d4e1',
          DEFAULT: '#d5698e',
          dark: '#66193b',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#3d3d3d',
          muted: '#6b6b6b',
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
