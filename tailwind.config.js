/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColor: '#475467',
        customBlack: '#101828',
        label: '#344054',
        resume: '#F9FAFB'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

