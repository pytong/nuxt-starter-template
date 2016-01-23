// --------------------------
// @author Bilal Cinarli
// --------------------------

'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename');

var tasks = {
  sass: function () {
    return gulp.src('application.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(rename('rocket.css'))
      .pipe(gulp.dest('.'));
  }
};

gulp.task('sass', tasks.sass);

gulp.task('styles', ['sass'], function () {

});

gulp.task('watch', ['styles'], function () {
  // --------------------------
  // watch:sass
  // --------------------------
  gulp.watch('**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);
