import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#343D48', // Dark - rgb(52, 61, 72)
          deep: '#020718', // Deep - rgb(2, 7, 24)
        },
      },
      boxShadow: {
        card: '0 0 16px rgba(52, 61, 72, 0.12)', // Gray shadow
      },
    },
  },
  plugins: [],
} satisfies Config
