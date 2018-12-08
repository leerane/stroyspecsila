import gulp from 'gulp';
import gulpZip from 'gulp-zip';
import gulpGzip from 'gulp-gzip';
import {build} from './build';
import {PathName} from './utils';

/**
 * Модуль сжатия проекта (zip и gzip)
 */

/**
 * Функция zip
 */
const toZip = () => {
  return gulp.src(PathName.BUILD)
    .pipe(gulpZip('build.zip'))
    .pipe(gulp.dest('./'));
};

/**
 * Функция gzip
 */
const toGzip = () => {
  return gulp.src(PathName.BUILD)
    .pipe(gulpGzip('build.gz'))
    .pipe(gulp.dest('./'));
};

const zip = gulp.series(build, toZip);
const gzip = gulp.series(build, toGzip);

export {zip, gzip};
