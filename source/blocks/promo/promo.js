/**
 * Модуль промо
 */

import Swiper from 'swiper';

// Сам Swiper
const promoSwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
 /* autoplay: {
    delay: 3000,
  }*/
});

promoSwiper.init();
