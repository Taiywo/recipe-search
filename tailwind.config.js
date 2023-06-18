/** @type {import('tailwindcss').Config} */


module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/src/component/bg-img.png')",
        'errorImage': "url('/src/component/error-img.png')"
        
      },
      screens: {
        's': '640px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        'primary':  '#8D3F8D',
        'secondary':  '#A060A0',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

