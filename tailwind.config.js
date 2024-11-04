/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        primary: "#D9D9D9",
        secundary: "#8C8C8C",
        terciary: "#595959",
        graydark: "#404040",
       }
    },
  },
  plugins: [],
}

