/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0e0e0f',
          900: '#161617',
          800: '#1f1f21',
          700: '#2a2a2d',
          600: '#3a3a3f',
        },
        bone: {
          50:  '#f5f4f0',
          100: '#ecebe6',
          200: '#d8d6cd',
        },
        accent: {
          DEFAULT: '#05ce78',
          hover:   '#04b86b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        prose: '60ch',
      },
    },
  },
  plugins: [],
};
