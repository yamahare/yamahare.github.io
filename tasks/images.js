const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminJpegtran = require('imagemin-jpegtran');
const { paths } = require('./config')

// ファイルの圧縮
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ]))
    .pipe(gulp.dest(paths.images.dest))
}

module.exports = images
