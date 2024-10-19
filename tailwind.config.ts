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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'floral-white':'#fffceb',
        'lemon-chiffon':'#FEF3C7',
        'philippine-bronze':'#78350F',
        'dark-jungle-green':'#0F172A',
        'yellow':'#FDE68A',
        'independence':'#475569',
        'charcoal':'#334155'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(155deg, #fffbec 55%, #fef3c7 10%)',
        'custom-gradient-two': 'linear-gradient(140deg, #fffbec 40%, #fef3c7 10%)',
      },
    },
  },
  plugins: [],
};
export default config;
