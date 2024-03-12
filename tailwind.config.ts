import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: '#fff',
          background: '#4CAD73',
        },
        secondary: {
          text: '#333',
          background: '#fff',
        },
        black: {
          DEFAULT: '#333333',
        },
        gray: {
          400: '#F2F2F2',
          DEFAULT: '#BDBDBD',
          600: '#828282',
        },
        green: {
          DEFAULT: '#4CAD73',
        },
      },
      fontSize: {
        xs: ['.75rem', '0.908rem'], // 12px & 14.52px
        s: ['.875rem', '1.059rem'], // 14px & 16.94px
        base: ['1.125rem', '1.875rem'], // 18px & 30px
        h1: ['2.125rem', '2.563rem'], // 34px & 41px
        h2: ['1.5rem', '1.125rem'], // 24px & 18px
      },
      boxShadow: {
        btn: '0px 3px 5px 2px rgba(0, 0, 0, 0.07)',
        card: '0px -5px 20px 0px rgba(0, 0, 0, 0.07)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1))',
      },
      borderRadius: {
        '30': '30px',
      },
    },
  },
  plugins: [],
};
export default config;
