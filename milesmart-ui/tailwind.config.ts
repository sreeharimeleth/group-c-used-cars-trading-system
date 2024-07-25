import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "profile-listview": "calc(100vh - 13.3rem)",
        "profile-listview-md": "calc(100vh - 12.3rem)",
        "search-view": "calc(100vh - 13.3rem)"
      },
      maxHeight: {
        "profile-listview": "calc(100vh - 13.3rem)",
        "profile-listview-md": "calc(100vh - 12.3rem)",
        "search-view": "calc(100vh - 14.3rem)"
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
};
export default config;
