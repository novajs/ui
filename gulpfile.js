/**
 * Ember - without all the useless page controlling shit.
 *
 * <3 from Seattle.
 **/

const gulp   = require('gulp');
const babel  = require('gulp-babel');
const gutil  = require('gulp-util');
const pump   = require('pump');
const uglify = require('gulp-uglify');

const pretty = require('pretty-bytes');

const sass   = require('gulp-sass');
const clean  = require('gulp-clean-css');

gulp.task('sass', (cb) => {
  pump([
      gulp.src('./scss/**/*.scss'),
      sass().on('error', sass.logError),
      clean({debug:true}, function(details) {
        console.log('SCSS:', details.name, ':', pretty(details.stats.originalSize), '->', pretty(details.stats.minifiedSize));
      }),
      gulp.dest('./public/css')
    ],
    cb
  );
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('babel', (cb) => {
  pump([
      gulp.src('./js/*.js'),
      babel({
        presets: ['es2015']
      }),
      uglify({preserveComments: 'license'}),
      gulp.dest('./public/js')
    ],
    cb
  );
})

gulp.task('default', [
  'sass',
  'babel'
])
