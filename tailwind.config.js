/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.tsx"],
  theme: {
    screens: {
      'mobile-sm': '320px',
      'mobile-m': '375px',
      'mobile-l': '425px',
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

