/**
 * Модуль плавного появления
 */

import ScrollReveal from 'scrollreveal';

// Промо
ScrollReveal().reveal('.promo__container', {
  easing: 'ease-in-out',
  duration: 800,
  distance: '60px'
});

// Последние новости
ScrollReveal().reveal('.latest-news__inner', {
  easing: 'ease-in-out',
  duration: 800,
  distance: '60px'
});

// Отдельные карточки новостей
ScrollReveal().reveal('.latest-news__item', {
  easing: 'ease-in-out',
  duration: 800,
  distance: '60px'
});

// О нас
ScrollReveal().reveal('.about-us__inner', {
  easing: 'ease-in-out',
  duration: 800,
  distance: '60px'
});

// Связь
ScrollReveal().reveal('.feedback__inner', {
  easing: 'ease-in-out',
  duration: 800,
  distance: '60px'
});

// Контакты
ScrollReveal().reveal('.contact__inner', {
  easing: 'ease-in-out',
  duration: 800,
  distance: '60px'
});

