/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b1d26",
        wei: "#fff",
        accent: "#fbd784",
        gray: {
          "100": "rgba(255, 255, 255, 0.1)",
          "200": "rgba(255, 255, 255, 0.5)",
        },
      },
      spacing: {},
      fontFamily: {
        gilroy: "Gilroy",
        "chronicle-display": "'Chronicle Display'",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "221xl": "240px",
      "77xl": "96px",
      "41xl": "60px",
      "69xl": "88px",
      "25xl": "44px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
