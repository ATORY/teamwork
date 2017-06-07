const gulp = require('gulp');
var less = require('gulp-less');
gulp.task('css', function () {
  var postcss = require('gulp-postcss');
  var sourcemaps = require('gulp-sourcemaps');

  return gulp.src('client/style/main.css')
    // .pipe(isProduction ? gutil.noop() : sourcemaps.init() )
    .pipe(less())
    // .pipe(postcss([require('precss'), require('autoprefixer')]))
    // .pipe(isProduction ? gutil.noop() : cleanCSS())
    // .pipe(isProduction ? gutil.noop() : sourcemaps.write('./'))
    // .pipe(isProduction ? gutil.noop() : sourcemaps.write('.'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('watch', function () {
  gulp.watch(`${__dirname}/client/style/*`, ['css']);
});

gulp.task('default', ['css']);
gulp.task('dev', ['css', 'watch']);