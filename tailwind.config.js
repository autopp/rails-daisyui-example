module.exports = {
  content: [
    './app/views/**/*.{slim,erb,jbuilder,turbo_stream,js}',
    './app/decorators/**/*.rb',
    './app/helpers/**/*.rb',
    './app/inputs/**/*.rb',
    './app/assets/javascripts/**/*.js',
    './config/initializers/**/*.rb',
    './lib/components/**/*.rb'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  theme: {
    container: {
      center: true
    }
  }
}
