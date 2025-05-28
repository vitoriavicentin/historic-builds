// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#131712',
        'secondary-brand': '#6d8566',
        'accent-green': '#50d22c',
        'border-light': '#f1f4f1',
        'border-medium': '#dee4dc',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        noto_sans: ['var(--font-noto-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [containerQueries, forms],
};

export default config;
