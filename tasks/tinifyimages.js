'use strict'

const gulp = require('gulp');
const $ = require('gulp-tinypng');

module.exports = function(options) {
  return function () {
    return gulp
      .src(options.src, {since: gulp.lastRun(options.taskName)})
      .pipe($('QPeofLl6Q0EE7HVpGKISPaqHkXQU_Mn3'))
      .pipe(gulp.dest('./dist/assets/images'));
  };
};
