'use strict'

const $            = require('gulp-load-plugins')();
const gulp         = require('gulp');
const autoprefixer = require('autoprefixer')

module.exports = function(options) {
  return function() {
    return gulp
      .src(options.src)
      .pipe($.sourcemaps.init())
      .pipe($.sass())
      .pipe($.autoprefixer())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/assets/styles'))
  };
};
