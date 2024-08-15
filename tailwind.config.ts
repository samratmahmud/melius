import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            gray: {
               "50": "#ffffff",
               "400": "#A3AED0",
               "500": "#8F9BBA",
               "600": "#707EAE",
               "800": "#333333",
               "950": "#060606",
            },
            amber: {"300": "#EFC252", "400": "#52A0EF"},
            teal: {"500": "#05CD99"},
            cyan: {"900": "#2B3674"},
            primary: {"300": "#B0BBD5", "500": "#8050F2", "950": "#1B2559"},
         },
      },
      fontSize: {
         xs: ["8px", {lineHeight: "1.28em"}],
         sm: ["10px", {lineHeight: "1.01em"}],
         md: ["11px", {lineHeight: "1.44em"}],
         base: ["12px", {lineHeight: "1.13em"}],
         lg: ["14px", {lineHeight: "1.43em"}],
         xl: ["16px", {lineHeight: "1.38em"}],
         "2xl": ["18px", {lineHeight: "1.11em", letterSpacing: "0.02em"}],
         "3xl": ["20px", {lineHeight: "1.1em"}],
         "4xl": ["24px", {lineHeight: "1.08em"}],
         "5xl": ["26px", {lineHeight: "1.19em"}],
         "6xl": ["28px", {lineHeight: "1.11em", letterSpacing: "0.02em"}],
         "7xl": ["30px", {lineHeight: "1.2em"}],
         "8xl": ["32px", {lineHeight: "1.09em"}],
         "9xl": ["40px", {lineHeight: "1.1em"}],
         "10xl": ["50px", {lineHeight: "1.2em"}],
         "11xl": ["60px", {lineHeight: "1.1em"}],
         "12xl": ["64px", {lineHeight: "1.2em"}],
         "13xl": ["84px", {lineHeight: "1.07em"}],
         "14xl": ["120px", {lineHeight: "1.1em"}],
      },
      shadows: {
         sm: "2px 2px 2px",
         md: "0px 3px 5px rgba(67, 24, 255, 0.25)",
         lg: "3px 4px 9px 1px rgba(112, 144, 176, 0.08)",
         xl: "0px 5px 9px rgba(67, 24, 255, 0.25)",
         "2xl": "0px 5px 12px 1px rgba(30, 30, 47, 0.07)",
      },
      fontFamily: {
         "tt-hoves": ["'TT Hoves'", ...fontFamily.sans],
         "code-pro-lc": ["'Code Pro LC'", ...fontFamily.sans],
         "futura-lt": ["'Futura LT'", ...fontFamily.sans],
         "codec-pro": ["'Codec Pro'", ...fontFamily.sans],
         "dm-sans": ["var(--font-dm-sans)", ...fontFamily.sans],
         "grape-nuts": ["var(--font-grape-nuts)", ...fontFamily.sans],
         "inter-tight": ["var(--font-inter-tight)", ...fontFamily.sans],
      },
      backgroundImage: {
         "header-bg": "linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0) 100%)",
         "black-primary":
            "linear-gradient(266deg, rgba(128, 80, 242, 0.30) 0%, rgba(24.10, 0, 81.34, 0.30) 100%)",
         "amber-primary": "linear-gradient(166deg, #CBB5FF 0%, #8050F2 100%)",
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
            md: "2rem",
            lg: "3rem",
            xl: "4rem",
         },
      },
      screens: {
         sm: "600px",
         md: "768px",
         lg: "992px",
         xl: "1280px",
      },
   },
   plugins: [],
};
export default config;
