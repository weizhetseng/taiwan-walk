/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      spacing: {
        7.5: '30px',
        12.5: '50px',
        15: '60px',
        25: '100px',
        30: '120px',
        39: '156px',
        50: '200px',
        55: '220px',
        87.5: '350px',
        100: '400px'
      },
      colors: {
        orange_1: '#FF725E',
        green_1: '#65895F',
        green_2: '#7F977B',
        green_3: '#6E7D60',
        green_4: '#A8B8A5',
        green_5: '#E0DA48',
        gray_1: '#E5E5E5',
        gray_2: '#F9F9F9',
        gray_3: '#646464',
        gray_4: '#E6E6E6',
        black_1: 'rgba(0,0,0,0.4)'
      },
      backgroundImage: {
        selectArrow: "url('../image/arrowD.svg')",
        datepicker: "url('../image/datepicker.svg')"
      }
    }
  },
  plugins: []
}
