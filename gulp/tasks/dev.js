import gulp from 'gulp';
import {build} from './build';
import stream from './server';
import watch from './watch';

/**
 * Модуль разработки проекта (билд и стрим)
 */

/**
 * Функция разработки проекта (билд и стрим)
 */
const dev = gulp.series(build, gulp.parallel(stream, watch));

export {dev as default};
