/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "bgColor": "#222222",
        "bgInput": "#111111",
        "bgTotal": "#A00D02",
      },
      fontFamily: {
        'MainFont': ['system-ui', 'sans-serif']
      },
    },
    width: {
      '80%': "80%",
      'full': '100%',
      '1/8': '20%',
      '45%': '45%',
    },
  },
  plugins: [],
}

