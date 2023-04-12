/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlueIintro: "hsl(217, 28%, 15%)",
        darkBlueMain: " hsl(218, 28%, 13%)",
        darkBlueFooter: "hsl(216, 53%, 9%)",
        darkBlueTestimonials: "hsl(219, 30%, 18%)",
        Cyan: " hsl(176, 68%, 64%)"
        , Blue: " hsl(198, 60%, 50%)"
        , lightRed: " hsl(0, 100 %, 63 %)"
      }
      ,
      container: {
        padding: "1.4rem",
        center: true
      }
    },
    fontFamily: {
      "openSans": ['"Open Sans"'],
      "raleway": ['"Raleway"']
    }
  },
  plugins: [],
}