module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      gridTemplateColumns: {
        card: 'repeat(auto-fill, minmax(334px, 1fr))'
      },
      colors: {
        primary: '#001f3f',
        dark: {
          400: '#2c2c2c'
        }
      }
    }
  }
}
