const hamburgerButton = document.querySelector('.js-hamburger-button');

hamburgerButton.addEventListener('click', function () {
  hamburgerButton.classList.toggle('hamburger-button--close');
});
$(function () {
  $('.js-hamburger-button').on('click', () => alert('TEST'));
});

