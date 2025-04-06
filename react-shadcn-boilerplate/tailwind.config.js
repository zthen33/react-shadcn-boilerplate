// tailwind.config.cjs
export const config = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1e40af",
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
