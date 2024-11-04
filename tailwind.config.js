/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        text: "#F2F2F2",
        primary: "#D9D9D9",
        secundary: "#8C8C8C",
        terciary: "#595959",
        graydark: "#404040",
       },
       margin: {
        auto: "0 auto"
       },
       translate: {
        centralize: "-50%",
       },
       screens: {
        "mobasm": "300px",
        'mobabs': '500px',
        'tablet': '520px',
  
       },
    },
  },
  plugins: [],
}

