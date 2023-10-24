import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      colors: {
        "light-100": "var(--light-100)",
        "light-200": "var(--light-200)",
        "light-300": "var(--light-300)",
        "brand-colorfourth-color": "var(--brand-colorfourth-color)",
        "brand-colorprimary": "var(--brand-colorprimary)",
        "brand-colorsecond-color": "var(--brand-colorsecond-color)",
        "neutralbrown": "var(--neutralbrown)",
        "neutralwhite": "var(--neutralwhite)",
      },
    },
  },
  plugins: [],
}
export default config
