module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        18: "18px",
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        "icon-color": "#A2A2A8",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        grayf3: "#f3f3f3",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        darkbg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
        header: "#00b4aa",
        userOptions: "#3a1097",
        border_title: "#00d1ed",
        rightBox: "#f3deff",
        blueborder: "#0768EA",
      },
      boxShadow: {
        sdprimary: "10px 10px 20px rgba(211, 211, 211, 0.25)",
        userOptions: "0 3px 10px #000",
      },
      spacing: {
        293: "293px",
      },
      padding: {
        18: "18px",
        searchtext: "10px",
        userOptions: "0px 10px",
        slider: "48px 36px",
      },
      borderRadius: {
        5: "5px",
      },
      width: {
        userOptions: "200px",
        userOptions_authen: "110px",
      },
      gridTemplateColumns: {
        slider: "",
      },
      backgroundImage: {
        slider: "linear-gradient(155deg, #00b4aa 6.67%, #a4d96c 84.1%)",
      },
    },
  },
  plugins: [],
};
