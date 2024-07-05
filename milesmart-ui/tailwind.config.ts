import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "black-100": "#2B2C35",
      },
      height: {
        "profile-listview": "calc(100vh - 13.3rem)",
        "profile-listview-md": "calc(100vh - 12.3rem)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
          
      },
    },
  },
  plugins: [],
};
export default config;
