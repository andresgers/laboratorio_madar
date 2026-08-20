/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        science: {
          50: '#f0f5fc',
          100: '#dce8f8',
          200: '#c1d7f3',
          300: '#97beea',
          400: '#649fe0',
          500: '#3d82d4',
          600: '#2a66b5',
          700: '#225293',
          800: '#1e4479',
          900: '#1b3a65',
          950: '#122440',
        },
        lab: {
          dark: '#0a1128',
          card: '#101a36',
          border: '#1e294b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
