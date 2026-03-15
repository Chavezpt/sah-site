import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a0f1e',
          light: '#0d1526',
          lighter: '#131c2e',
          card: '#111827',
          border: '#1e293b',
        },
        'blue-electric': {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
        },
        'green-vivid': '#4ade80',
        surface: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
