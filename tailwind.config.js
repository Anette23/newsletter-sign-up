/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern-mobile":
          "url('../src/assets/images/illustration-sign-up-mobile.svg')",
          "hero-pattern-desktop":
          "url('../src/assets/images/illustration-sign-up-desktop.svg')",
      }),
      

      colors: {
        primary: "hsl(4, 100%, 67%)",
        darkSlateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
        success: "hsl(133, 100%, 50%)"
      },
    },
  },
  plugins: [],
};
