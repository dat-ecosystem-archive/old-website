/* jshint node: true */

var gulp = require('gulp');
var less = require('gulp-less');
var kss = require('gulp-kss');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

var path = {
  style: {
    src: './style',
    dest: './css'
  },
  styleguide: './styleguide'
};

gulp.task('style', function(){
  gulp.src(path.style.src + '/less/*.less')
      .pipe(plumber())
      .pipe(kss({
        overview: path.styleguide + '/styleguide.md',
        templateDirectory: path.styleguide + '/template'
      }))
      .pipe(gulp.dest(path.styleguide));

  // Concat and compile all your styles for correct rendering of the styleguide.
  gulp.src(path.style.src + '/less/dat.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(rename('style.css'))
      .pipe(gulp.dest(path.styleguide + '/public/'));
});

gulp.task('watch', function(){
  gulp.watch([path.style.src + '/**/*.less', path.styleguide + '/template/**/*.less'], ['style']);
});

gulp.task('build', ['style']);
gulp.task('default', ['build', 'watch']);
