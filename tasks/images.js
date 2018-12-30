const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminJpegtran = require('imagemin-jpegtran');
const imageminSvgo = require('imagemin-svgo');
const { paths } = require('./config')

// ファイルの圧縮
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(paths.images.dest))
}

module.exports = images
