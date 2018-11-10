let mix = require('laravel-mix')

mix
  .setPublicPath('public')
  .react('resources/js/app.js', 'public/js')
  .extract(['react', 'react-dom', 'lodash'])
  .sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
  mix.version()
}
