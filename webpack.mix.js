const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/vue.js', 'public/js')
  .webpackConfig(require('./webpack.config'))
  .vue()
  .browserSync('http://bambslaundry.test/')
  .disableNotifications()

if (mix.inProduction()) {
  mix.version()
}
