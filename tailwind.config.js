module.exports = {
    theme: {
      container: {
        center: true,
        padding: '2rem'
      },
    },
    variants: {},
    plugins: [],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        "./src/components/**/*.vue",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/templates/**/*.vue",
        "./gridsome.config.js"
      ]
    }
  }
  