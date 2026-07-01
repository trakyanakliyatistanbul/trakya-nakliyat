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
          DEFAULT: '#0B1220',
          mid: '#141d33',
          cta: '#0F172A',
          card: '#1a2744',
        },
        gold: {
          DEFAULT: '#C9A227',
          bright: '#D4AF37',
          deep: '#A8841E',
          pale: 'rgba(201,162,39,0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Segoe UI', 'system-ui', 'sans-serif'],
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
