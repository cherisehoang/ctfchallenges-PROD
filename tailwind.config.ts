import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
