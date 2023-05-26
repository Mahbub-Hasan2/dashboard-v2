module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rubik': ['Rubik Gemstones', 'cursive']
      },
      colors: {
        'primary': '#6F6AF8',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}