/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          "pale-orange": "hsl(25, 100%, 94%)",
        },
        neutral: {
          "dark-blue": "hsl(220, 13%, 13%)",
          "grayish-blue": "hsl(219, 9%, 45%)",
          "medium-grayish-blue": "hsl(220, 14%, 75%)",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          "black-opactiy": "hsl(0, 0%, 0%)",
        },
      },
    },
  },
  plugins: [],
};
