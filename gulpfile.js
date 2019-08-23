const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const extReplace = require('gulp-ext-replace');
const ico = require('gulp-to-ico');
const webp = require('imagemin-webp');

gulp.task('imagemin', (done) => {
  gulp.src('sources/*').
    pipe(
      imagemin([pngquant({ quality: [0.5, 0.5] }), mozjpeg({ quality: 50 })])).
    pipe(gulp.dest('dist'));
  done();
});

gulp.task('webp', (done) => {
  gulp.src('dist/*').
    pipe(imagemin([webp({ quality: 50 })])).
    pipe(extReplace('.webp')).
    pipe(gulp.dest('dist/'));
  done();
});

gulp.task('favicon', (done) => {
  gulp.src('./dist/favicon.png').
    pipe(ico('favicon.ico', { resize: true, sizes: [32] })).
    pipe(gulp.dest('dist/'));
  done();
});
