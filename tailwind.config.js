module.exports = {
  mode: "jiit",
  content: ["./src/*.{html,js}"],

  theme: {
    extend: {},
  },
  variant: [],
  plugins: [require("@tailwindcss/forms")],
};
