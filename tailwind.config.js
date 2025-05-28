/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // scan Angular components
    "./node_modules/flowbite/**/*.js" // include flowbite if using
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // optional, if using flowbite
  ],
}

