const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#EBF8FF",
          100: "#DEEFFF",
          200: "#C2E0FF",
          300: "#A6D1FF",
          400: "#8AB2FF",
          500: "#00468B",
          600: "#003C80",
          700: "#003273",
          800: "#002866",
          900: "#001E59",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
