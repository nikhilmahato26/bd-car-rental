/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B14',
          900: '#0B132B',
          850: '#0F1A3A',
          800: '#162850',
          700: '#1E3A70',
          600: '#2A4E94',
        },
        brandYellow: {
          DEFAULT: '#F5B800',
          light: '#FFD233',
          dark: '#D99F00',
          hover: '#E5A800',
        },
        brandRed: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'Oswald', 'sans-serif'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -5px rgba(245, 184, 0, 0.35)',
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
