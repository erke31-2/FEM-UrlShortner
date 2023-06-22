/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",

        Red: "hsl(0, 87%, 67%)",

        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bgWorking: "url('/images/illustration-working.svg')",
        bgBoostMb: "url('/images/bg-boost-mobile.svg')",
        bgBoostDesk: "url('/images/bg-boost-desktop.svg')",
        bgShortenMb: "url('/images/bg-shorten-mobile.svg')",
        bgShortenDesk: "url('/images/bg-shorten-desktop.svg')"
      }
    },
  },
  plugins: [],
};
