import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-escuro-pasini': "#5B6D48",
        'verde-claro-pasini': "#798D66",
        'cinza-pasini': "#E3E0D3",
        'dourado-claro-pasini': "#E1CC7B",
        'dourado-escuro-pasini': "#B4882D"
      },
    },
  },
  plugins: [],
};
export default config;
