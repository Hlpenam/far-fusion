/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1120',    // Azul oscuro
        secondary: '#006837',  // Verde Atento
        accent: '#FFE000',    // Amarillo
        background: '#F0F0F0' // Fondo claro
      },
      backgroundImage: {
        'warning-stripes': 'repeating-linear-gradient(45deg, #000000 0, #000000 10px, #FFE000 10px, #FFE000 20px)',
        'hero-gradient': 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,51,1) 100%)',
        'card-hover': 'linear-gradient(180deg, rgba(255,224,0,0.1) 0%, rgba(0,104,55,0.15) 100%)',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      transform: ['hover', 'active'],
      translate: ['hover', 'active'],
      scale: ['hover', 'active'],
    },
  },
} 