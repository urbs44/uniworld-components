/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'px-4',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'uniworld-blue': '#0C2340', // Deep Navy Blue
        'uniworld-white': '#FFFFFF', // White
        'uniworld-light-gray': '#F5F5F5', // Light Gray
        
        // Secondary Colors
        'uniworld-dark-gray': '#4A4A4A', // Dark Gray
        'uniworld-light-blue': '#D9E6F2', // Light Blue
        'uniworld-yellow': '#E6B800', // Accent Yellow
        
        // Button Hover States
        'uniworld-blue-hover': '#1A3D6D', // Lighter blue for hover states
        
        // Form Elements
        'uniworld-input-border': '#E0E0E0', // Light gray border for inputs
        
        // Footer
        'uniworld-footer-text': '#E0E0E0', // Light gray for footer text
        
        // Legacy colors (keeping for backward compatibility)
        'uniworld-red': '#A31F34',
        'uniworld-gray': '#F5F5F5', // Updated to match Light Gray
        'uniworld-dark': '#4A4A4A', // Updated to match Dark Gray
        'uniworld-light': '#FFFFFF', // Same as White
        'uniworld-accent': '#E6B800', // Updated to match Accent Yellow
      },
      fontFamily: {
        // Custom fonts with Google Fonts fallbacks
        'libel': ['Libel Suit Regular', 'var(--font-playfair)', 'Playfair Display', 'serif'],
        'libel-bold': ['Libel Suit Bold', 'var(--font-playfair)', 'Playfair Display', 'serif'],
        'questa': ['Questa Sans Regular', 'var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'questa-bold': ['Questa Sans Bold', 'var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans Regular', 'var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        
        // Legacy font mappings (for backward compatibility)
        sans: ['Questa Sans Regular', 'var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        serif: ['Libel Suit Regular', 'var(--font-playfair)', 'Playfair Display', 'serif'],
        display: ['Libel Suit Bold', 'var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 