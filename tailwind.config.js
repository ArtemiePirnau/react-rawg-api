/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Urbanist"'],
      },
      colors: {
        'main': '#0d171f',
        'second': "#15202c",
        'text': "#92f"
      },
    },
  },
  plugins: [],
}
