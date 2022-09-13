/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#FAF3F3',
        'btn-bg': '#C86565',
        'bg-background' : '#FAF3F3',
      },
      fontFamily : {
        'poppins':["Poppins",'sans-serif'],
        'inter':["Inter",'sans-serif'],
      },
    },
  },
  plugins: [],
}
