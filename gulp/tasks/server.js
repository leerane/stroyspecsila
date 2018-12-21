import {PathName} from './utils';
import browserSync from 'browser-sync';

/**
 * Модуль стрима
 */

const bs = browserSync.create();
const reload = bs.reload;

/**
 * Функция создания сервера
 */
const stream = () => {
  bs.init({
    server: {
      baseDir: PathName.BUILD
    },
    notify: false,
    uf: false
  });

  bs.watch(PathName.BUILD).on('change', reload);
};

export {stream as default};
