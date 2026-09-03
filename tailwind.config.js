/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#185BF1',
          dark: '#0B4FA8',
        },
        secondary: {
          DEFAULT: '#20C76A',
          dark: '#1CA859',
        },
        dark: '#172033',
        navy: '#0A142F',
        light: '#F4F8FC',
        gray: {
          400: '#94A3B8',
          600: '#64748B',
          800: '#334155',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
