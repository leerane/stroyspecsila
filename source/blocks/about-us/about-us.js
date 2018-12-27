/**
 * Модуль секции "Наши клиенты"
 */

import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/dist/js/swiper.esm.js';

// Устанавливаем модули
Swiper.use([Navigation, Pagination, Scrollbar]);

// Сам Swiper
const promoSwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
