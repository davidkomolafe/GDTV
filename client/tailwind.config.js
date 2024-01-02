/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#222222",
        backgroundColorFade: "#000000cc",
        backgroundColorFadeL: "#0b0b0b8f",
        textColor: "#e4e4e4",
        textColorS: "#a9a9a9",
        primary: "#F5F3F3",
        accent: "#C11515",
        header: "#101010",
        hero: "#171717",
        popular: "#2A2D34",
      },
      backgroundImage: {
        "hero-signup": "url('../src/Assets/img/bgg.jpg')",
        "hero-login": "url('../src/Assets/img/bg2.jpg')",
        "hero-hps": "url('../src/Assets/img/bg2.jpg')",
      },
      padding: {
        12: "4rem",
        15: "15rem",
        20: "20rem",
        25: "25rem",
        30: "30rem",
        35: "35rem",
        40: "40rem",
        watch: ".8rem",
      },
      borderRadius: {
        radius: "3rem",
      },
      borderWidth: {
        30: "30rem",
        6: "6.5rem",
        1: "0.2rem",
      },
      scale: {
        1: "1.02",
      },
      spacing: {
        navigate: "6.45rem",
      },
      width: {
        15: "15rem",
        20: "20rem",
        25: "25rem",
        30: "30rem",
        35: "35rem",
        40: "40rem",
        45: "45rem",
        55: "55rem",
        watch: "13rem",
      },

      height: {
        hero: "70vh",
        height: "60vh",
        30: "30rem",
        watch: "8rem",
        popular: "35rem",
        trend: "18rem",
      },
      boxShadow: {
        bx: "0 0 100px 10px rgb(0, 0, 0) inset",
      },
      screens: {
        ssm: "350px",
        sm: "450px",
        md: "640px",
      },
    },
  },
  plugins: [],
};
