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
        'uniworld-blue': '#003366', // Deep Navy Blue
        'uniworld-white': '#FFFFFF', // White
        'uniworld-light-gray': '#F5F5F5', // Light Gray
        
        // Secondary Colors
        'uniworld-dark-gray': '#4A4A4A', // Dark Gray
        'uniworld-light-blue': '#D9E6F2', // Light Blue
        'uniworld-gold': '#D4AF37', // Gold/Yellow Accent
        'uniworld-yellow': '#E6B800', // Legacy Accent Yellow
        
        // Button Hover States
        'uniworld-blue-hover': '#1A3D6D', // Lighter blue for hover states
        
        // Form Elements
        'uniworld-input-border': '#E0E0E0', // Light gray border for inputs
        
        // Footer
        'uniworld-footer-text': '#E0E0E0', // Light gray for footer text
        
        // Legacy colors (keeping for backward compatibility)
        'uniworld-red': '#8B0000',
        'uniworld-dark-red': '#8f1b2b', // New dark red color
        'uniworld-dark-red-hover': '#5b1818', // Hover state for dark red
        'uniworld-gray': '#F5F5F5', // Updated to match Light Gray
        'uniworld-dark': '#4A4A4A', // Updated to match Dark Gray
        'uniworld-light': '#FFFFFF', // Same as White
        'uniworld-accent': '#E6B800', // Updated to match Accent Yellow
      },
      fontFamily: {
        // Custom fonts
        'libel': ['Libel Suit Regular', 'serif'],
        'libel-bold': ['Libel Suit Bold', 'serif'],
        'questa': ['Questa Sans Regular', 'sans-serif'],
        'questa-bold': ['Questa Sans Bold', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        
        // Legacy font mappings (for backward compatibility)
        sans: ['Questa Sans Regular', 'sans-serif'],
        serif: ['Libel Suit Regular', 'serif'],
        display: ['Libel Suit Bold', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
