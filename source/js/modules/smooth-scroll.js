/**
 * Модуль плавного скролла
 */

import {getCoords} from './utils';

/**
 * Функция плавного скролла
 */
const smoothScroll = (target, duration) => {
  const refTarget = document.querySelector(target);
  const anchors = document.querySelectorAll(`a[href*="#"]:not([href^="#"]):not([href^="#0"])`);

  const Position = {
    START: window.pageYOffset,
    END:  getCoords(refTarget, false).top
  };

  const distance = Math.abs(Position.END - Position.START);

};
