/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge: [
    './/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '740px',
        // => @media (min-width: 740px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      maxWidth:{
        md:'644px',
        lg:'984px',
        xl:'1200px',
    },
    },
    
  },
  plugins: [],
}
