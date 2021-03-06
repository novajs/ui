/**
 * Ember - without all the useless page controlling shit. (well, useless for me)
 *
 * <3 from Seattle.
 **/

/* Gulp */
const gulp       = require('gulp');
const gutil      = require('gulp-util');
const pump       = require('pump');

/* JS to ES5 & uglification */
const babel      = require('gulp-babel');
const uglify     = require('gulp-uglify');

/* UX */
const pretty     = require('pretty-bytes');

/* Sass */
const sass       = require('gulp-sass');
const clean      = require('gulp-clean-css');

/* Handlebars */
const handlebars = require('gulp-handlebars');
const declare    = require('gulp-declare');
const wrap       = require('gulp-wrap');
const concat     = require('gulp-concat');


/**
 * Sass Transformation
 */
gulp.task('sass', (cb) => {
  pump([
      gulp.src('./scss/**/*.scss'),
      sass().on('error', sass.logError),
      clean({debug:true}, function(details) {
        console.log('SASS->minify:', details.name, ':', pretty(details.stats.originalSize), '->', pretty(details.stats.minifiedSize));
      }),
      gulp.dest('./html/css')
    ],
    cb
  );
});

gulp.task('sass:watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

/**
 * Handlebars transformations
 **/
gulp.task('templates', (cb) =>{
  pump([
      gulp.src('templates/**/*.hbs'),
      handlebars(),
      wrap('Handlebars.template(<%= contents %>)'),
      declare({
        namespace: 'TRITON.templates',
        noRedeclare: true, // Avoid duplicate declarations
      }),
      concat('templates.js'),
      gulp.dest('./html/js')
    ],

    cb
  );
});

gulp.task('templates:watch', (cb) => {
  gulp.watch('templates/**/*.hbs', ['templates'])
})

/**
 * JS Transformations.
 **/
gulp.task('babel', (cb) => {
  pump([
      gulp.src('./js/*.js'),
      babel({
        presets: ['es2015']
      }),
      uglify({preserveComments: 'license'}),
      gulp.dest('./html/js')
    ],

    cb
  );
})


gulp.task('babel:watch', () => {
  gulp.watch('./js/*.js', ['babel'])
})
/**
 * Page builder from templates.
 **/
gulp.task('pages', (cb) => {
  return cb();
});

gulp.task('pages:watch', () => {
  //
})

/**
 * Main Execution
 **/
gulp.task('default', [
  'sass',
  'templates',
  'babel',
  'pages'
])

gulp.task('watch', [
  'sass:watch',
  'templates:watch',
  'babel:watch',
  'pages'
])
