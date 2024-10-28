export default {
  content: [],content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(3, minmax(0, 400px))'
      },
      screens: {
        'mobile': '576px',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'laptop': '992px',
        // => @media (min-width: 1280px) { ... }

        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }

        'tv': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

