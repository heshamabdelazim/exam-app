/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: "var(--backGround)",
        secondBackGround: "var(--secondBackGround)",
        lightOrange: "var(--lightOrange)",
        lightYellow: "var(--lightYellow)",
      },
    },
  },
  plugins: [],
};
