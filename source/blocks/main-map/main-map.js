/**
 * Модуль Yandex.Карты
 */

let yMap;
const coords = [55.63270756910718, 37.36655599999999];
ymaps.ready(init);

/**
 * Функция инициализации карты
 */
function init() {
  // Создание карты.
  yMap = new ymaps.Map('main-map', {
    center: coords,
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  });

  kingsPlacemark = new ymaps.Placemark(coords, {
    hintContent: `СтройСпецСила`,
  }, {
    // Своё изображение иконки метки.
    iconLayout: 'default#image',
    iconImageHref: '../img/svg/map-pin.svg',
    iconImageSize: [66, 100],
    iconImageOffset: [-33, -90],
    draggable: true
  });

  yMap.geoObjects.add(kingsPlacemark);
}

