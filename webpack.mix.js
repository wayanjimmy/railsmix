let mix = require('laravel-mix')

mix
  .setPublicPath('public')
  .react('resources/js/main.js', 'public/js')
  .extract(['react', 'react-dom', 'lodash'])

if (mix.inProduction()) {
  mix.version()
}
