import gulp from 'gulp';
import {cleanup, build} from './gulp/tasks/build';
import dev from './gulp/tasks/dev';
import sortSASS from './gulp/tasks/sorting';
import {zip, gzip} from './gulp/tasks/zip';

/**
 * Основной файл
 */

gulp.task('build', build);
gulp.task('build:clean', cleanup);
gulp.task('dev', dev);
gulp.task('zip', zip);
gulp.task('gzip', gzip);
gulp.task('sorting', sortSASS);
