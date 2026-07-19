import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#16263D',
          cta: '#112034',
          card: '#1C304E',
        },
        gold: {
          DEFAULT: '#B88C3B',
          bright: '#B88C3B',
          deep: '#AD7A31',
          pale: 'rgba(184,140,59,0.12)',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'float': 'float 4s ease-in-out infinite',
        'badge-float': 'badgeFloat 3.5s ease-in-out infinite',
        'pin-bounce': 'pinBounce 2.5s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        badgeFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pinBounce: {
          '0%, 100%': { transform: 'rotate(-45deg) translateY(0)' },
          '50%': { transform: 'rotate(-45deg) translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
