/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",      
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins"
      },
      colors:{
        amazone_blue:"#131921",
        amazone_light:"#232F3E",
        amazone_yellow:"#febd69",
        whiteText:"#ffffff",
        lightText:"#ccc",
        quantity_box:"#F0F2F2",
        footerBottom:"#131A22"
      },
      boxShadow:{
        textShadow:"0px 0px 32px 1px rgba(199,199,199,1)",
        amazoneInput:"0 0 3px 2px rgb(228 121 17 / 50%)",
      }
    },
  },
  plugins: [],
}

