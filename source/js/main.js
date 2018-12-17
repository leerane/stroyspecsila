// Основные модули
import './modules/utils';
import './modules/disable-anchors';
import './modules/smooth-scroll';

// Блочные модули
import ScrollReveal from 'scrollreveal';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from '../../node_modules/photoswipe/dist/photoswipe-ui-default'
import '../blocks/gallery/gallery';
import '../blocks/js-dropdown-navigation/js-dropdown-navigation';
import '../blocks/js-hamburger-button/js-hamburger-button';
import '../blocks/js-main-header/js-main-header';
import '../blocks/js-scroll-top/js-scroll-top';
import '../blocks/main-map/main-map';
import '../blocks/modal/modal';




function revealsSectionTitles() {
  const titles = document.querySelectorAll('')
}
ScrollReveal().reveal('.tagline', { delay: 500 });

var openPhotoSwipe = function () {
  const body = document.body;
  body.cssText = `overflow: hidden`;
  var pswpElement = document.querySelectorAll('.pswp')[0];
  console.log(pswpElement);

  // build items array
  var items = [
    {
      src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
      w: 964,
      h: 1024
    },
    {
      src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
      w: 1024,
      h: 683
    }
  ];

  // define options (if needed)
  var options = {
    // history & focus options are disabled on CodePen
    history: false,
    focus: false,
    closeOnScroll: false,

    showAnimationDuration: 0,
    hideAnimationDuration: 0

  };

  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;
