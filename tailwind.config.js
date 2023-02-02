module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      oswald: ["'Oswald'", "sans-serif"],
      poppins: ["'Poppins'", "sans-serif"],
    },
  },
  variants: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        blue: "#14213d",
        yellow: "#fca311",
        gray: "#e5e5e5",
        white: "#ffffff",
        cloud: "#a4a4a4",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
