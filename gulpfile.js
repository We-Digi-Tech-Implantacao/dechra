const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

function mount() {
    return gulp.src('./styles/scss/*.scss')
        .pipe(sass())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./styles/css'));
}

function watch() {
    gulp.watch('./styles/scss/*.scss', mount);
    // gulp.watch(cleanCSS({compatibility: 'ie8'}));
    gulp.watch('./styles/scss/**/*.scss', mount);
}

exports.watch = watch;
exports.mount = mount;