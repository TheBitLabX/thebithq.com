import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data.ts',
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    extend: {
      fontFamily: {
        garet: ["Garet"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#FAB613",
        "success": "#27AE60",
        "secondary": "#6812FB",
        "warning": "#FAB613",
        "accent": "#FFF5C2",
        // "accent": "#37cdbe",
        // "neutral": "#3d4451",
        // "base-100": "#ffffff",
        "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
      },
    }
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
  },
}
export default config
