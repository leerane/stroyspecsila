/**
 * Модуль XHR
 */

// Вспомогательные переменные
const TIMEOUT = 7500;
const STATUS_CODE_DONE = 200;

/**
 * Класс, создающий XMLHttpRequest
 */
export default class Xhr {

  /**
   * @callback successCallback
   * @callback errorCallback
   * @callback loadCallback
   * @callback downloadCallback
   */

  /**
   * Функция создания запроса
   *
   * @param {string} method
   * @param {string} url
   * @param {number} timeout
   * @param {*} data
   * @param {successCallback} success
   * @param {errorCallback} error
   * @param {loadCallback} load
   * @param {downloadCallback} download
   */
  constructor({method = 'GET', url, timeout = TIMEOUT, data = null, success, error, load, download}) {

    // Опции
    this.options = {method, url, timeout, data, success, error, load, download};

    const xhr = new XMLHttpRequest();
    xhr.timeout = this.options.timeout;

    // Устанавливаем (ограничиваем) тип получаемых данных и добавляем "предфункцию"
    if (this.options.method === 'GET') {
      xhr.responseType = 'json';
      xhr.addEventListener('progress', () => {
        this.options.download();
      })
    }

    if (this.options.method === 'POST') {
      console.log(this.options.load);
      xhr.upload.addEventListener('progress', () => {

        this.options.load();
      })
    }

    // Обработка ошибок до 4xx включительно
    xhr.addEventListener('load', () => {
      if (xhr.status === STATUS_CODE_DONE) {

        // Удаляем результат "предфункции"
        if (this.options.method === 'GET') {
          this.options.download.remove();
        }

        if (this.options.method === 'POST') {
          this.options.load.remove();
        }

        this.options.success(xhr.response);
      } else {
        this.options.error(`Номер ошибки: ${xhr.status}.`);
      }
    });

    // Ошибка "задержки"
    xhr.addEventListener('timeout', () => {
      this.options.error(`Запрос не успел выполниться за ${xhr.timeout}мс.`);
    });

    // Ошибка соединения
    xhr.addEventListener('error', () =>  {
      this.options.error(`Произошла ошибка соединения ${xhr.status}.`);
    });

    // Открытие запроса
    xhr.open(method, url);

    // Отправка запроса
    xhr.send(data);
  }
}
