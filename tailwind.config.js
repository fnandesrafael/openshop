/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.tsx"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      serif: 'Baskervville'
    }
  },
  plugins: [],
}

