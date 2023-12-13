/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['"Noto Serif TC"'],
    },
    fontSize: {
      'head': '48px',
      'title': {
        1: '28px',
        2: '24px'
      },
      'subtitle': '20px',
      'body': '16px'
    },
    extend: {
      spacing: {
        '0': '4px',
        '7': '64px'
      },
      colors: {
        'primary': {
          1: '#FBFFE1',
          2: '#EEFFA9',
          3: '#D1FA31',
          4: '#BBE217',
          5: '#A8C400',
        },
        'grayScale': {
          1: '#E2E2E2',
          2: '#C6C6C6',
          3: '#8C8C8C',
          4: '#444444',
          5: '#000000',
        },
      }
    },
  },
  plugins: [],
}

