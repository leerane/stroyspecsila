/**
 * Модуль лоадера
 */

import {render} from '../../js/modules/utils';

/**
 * Функция создания узла
 */
const renderLoader = () => {

  // Шаблон разметки
  const template = `
  <div class='loader'>
     <span class='loader__icon'></span>
  </div>
  `;

  return render(template);
};


/**
 * Функция добавления лоадера
 *
 * @param {string} parent
 * @return {function()}
 */
const loader = (parent) => {
  let loaderElement;
  const parentElement = document.querySelector(parent);

  const appendLoader = () => {
    parentElement.appendChild(renderLoader());
    loaderElement = parentElement.lastElementChild;
  };
  appendLoader.remove = () => {
    console.log(loaderElement);
    parentElement.removeChild(loaderElement);
  };

  return appendLoader;
};

export {renderLoader, loader};
