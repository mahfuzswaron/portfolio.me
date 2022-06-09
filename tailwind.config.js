module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfolioTheme: {

          "primary": "#34d399",

          "secondary": "#d1d5db",

          "accent": "#07c417",

          "neutral": "#241E2A",

          "base-100": "#F2F2F3",

          "info": "#728ADA",

          "success": "#23E792",

          "warning": "#F7C655",

          "error": "#EC5569",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
