import type { Config } from "tailwindcss";
const srcDir = ".";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        darkblue: "#172339",
        paleblue: "#49566D",
        palewhite: "#F3EDE7",
        light: "#FAF8F6",
        lightpurple: "#A060FF",
        purple: "#CB30E3",
        orange: "#FFA84E",
      },
      fontFamily: {
        sans: ["Epilogue", "serif"], // Reemplaza 'NombreDeTuFuente' con el nombre de tu fuente
      },
    },
  },
  plugins: [],
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
};
