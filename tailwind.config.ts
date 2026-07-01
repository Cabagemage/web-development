import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#fff8eb',
          100: '#fdeac2',
          200: '#f9d48a',
          300: '#f4b860',
          400: '#e39f3c',
          500: '#c97f22',
          600: '#a9651b',
          700: '#884e19',
          800: '#6f401a',
          900: '#5b3619',
          950: '#331b0a'
        },
        accent: {
          400: '#9ff0cf',
          500: '#7ddeb8',
          600: '#4bb78d'
        }
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
