/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
    './src/*.vue',
    './src/App.vue'
  ],
  theme: {
    extend: {
      colors: {
        rayan: {
          purple: '#652B91',   // main accent (headphones, text)
          orange: '#F28C00',   // logo center
          dark: '#1A0B2E',     // background or footer
          light: '#F9F5FF',    // light background
          gray: '#E3D9F5',     // subtle borders
        },
      },
    },
    fontFamily: {      
      'sans': ['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require("daisyui"), 
  ],
  daisyui: {
    themes: [
      {
        rayanfm: {
          "primary": "#F28C00",        // rayan-orange
          "secondary": "#652B91",      // rayan-purple
          "accent": "#F28C00",         // rayan-orange
          "neutral": "#1A0B2E",        // rayan-dark
          "base-100": "#F9F5FF",       // rayan-light
          "base-200": "#E3D9F5",       // rayan-gray
          "base-300": "#1A0B2E",       // rayan-dark
          "info": "#652B91",           // rayan-purple
          "success": "#10b981",        // green
          "warning": "#F28C00",        // rayan-orange
          "error": "#ef4444",          // red
        },
      },
    ],
  }
}

