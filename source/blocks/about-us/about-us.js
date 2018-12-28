/**
 * Модуль секции "Наши клиенты"
 */

import Swiper from 'swiper';

// Сам Swiper
const clientsSwiper = new Swiper ('.swiper-container-2', {
  loop: true,
  breakpointsInverse: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

clientsSwiper.init();
