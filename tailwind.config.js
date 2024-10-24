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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        lightOrange: "var(--lightOrange)",
        lightYellow: "#fdb94d",
        warning: "var(--warning)",
        test: "red",
        test1: "blue",
      },
    },
  },
  plugins: [],
};
