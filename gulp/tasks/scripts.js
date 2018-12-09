import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';
import {PathName, FileName} from './utils';
import browserSync from 'browser-sync';

/**
 * Модуль компиляции JS файлов
 */

const bs = browserSync.create();
const reload = bs.reload;
const webpack = webpackStream.webpack;

/**
 * Функция компиляции JS файлов
 *
 * @return {function()}
 */
const js = () => {
  return gulp.src(PathName.SOURCE + PathName.JS + PathName.JS_MODULES + PathName.JS_PATTERN, {
    base: process.cwd()
  })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat(FileName.JS))
    .pipe(gulp.dest(PathName.BUILD + PathName.JS))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PathName.BUILD + PathName.JS))
    .pipe(reload({stream: true}));
};

/**
 * Функция компиляции JS библиотек
 *
 * @return {function()}
 */
const libs = () => {
  return gulp.src(PathName.SOURCE + PathName.LIBS + PathName.JS_PATTERN)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min',
      extname: '.js'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PathName.BUILD + PathName.JS + PathName.LIBS));
};

export {js, libs};
