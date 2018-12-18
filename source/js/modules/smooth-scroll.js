/**
 * Модуль плавного скролла
 */

import {getCoords} from './utils';
import {linear} from './animations';
import animate from './animate';

/**
 * Функция плавного скролла
 */
const smoothScroll = (item, duration = 2000) => {
  return function () {

    // Находим цель
    let refTarget;
    let endPoint;

    try {
      refTarget = document.querySelector(item.getAttribute('href'));
      endPoint = getCoords(refTarget).top
    } catch (e) {
      refTarget = 0;
      endPoint = refTarget;
    }


    /**
     * Координаты
     *
     * @typedef {Object} Position
     * @property {number} START
     * @property {number} END
     */
    const Position = {
      START: window.pageYOffset,
      END: endPoint
    };

    // Анимационная функция
    animate({
      draw: function (progress) {
        return window.scrollTo(0, progress * Position.END);
      },
      timing: linear,
      duration: duration
    })
  }
};

/**
 * Функция добавления плавного скролла на все якоря
 *
 * @param {string} elements Дополнительные элементы
 */
const appendSmooth = (...elements) => {

  // Берем все якоря
  const additionalElements = elements.join(', ');
  const anchors = document.querySelectorAll(`a[href*="#"]:not([href="#"]):not([href="#0"]), ${additionalElements}`);

  anchors.forEach((item) => {
    item.addEventListener('click', smoothScroll(item, 1000));
  })
};

appendSmooth('.js-scroll-top');
