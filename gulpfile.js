const gulp = require('gulp')
const clean = require('./tasks/clean')
const styles = require('./tasks/styles')
const templates = require('./tasks/templates')
const scripts = require('./tasks/scripts')
const images = require('./tasks/images')
const add_hash = require('./tasks/rev')
const change_hash_of_html_link = require('./tasks/rev_rewrite')
const printsize = require('./tasks/printsize')
const { paths } = require('./tasks/config')
const { reload, serve } = require('./tasks/server')

function watch () {
  gulp.watch(paths.styles.src, gulp.series(styles, reload))
  gulp.watch(paths.templates.src, gulp.series(templates, reload))
  gulp.watch(paths.scripts.watch, gulp.series(scripts, reload))
  gulp.watch(paths.images.src, gulp.series(images, reload))
}

// fileサイズ確認
gulp.task('report', gulp.series(
  printsize,
))

// 開発用
gulp.task('dev', gulp.series(
  clean,
  gulp.parallel(styles, templates, scripts, images),
  serve, watch
))

// 本番用
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(styles, templates, scripts, images),
  add_hash, change_hash_of_html_link,
))
