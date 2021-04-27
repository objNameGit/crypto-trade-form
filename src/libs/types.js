/**
 * @typedef Currency Валюта.
 * @property {string} currencyName Имя валюты.
 * @property {number} quantity Количество.
 */

/**
 * @typedef RequestBody Тело запроса.
 * @property {Currency} expense Исходящие средства.
 * @property {Currency} income Поступающие средства.
 */

/**
 * @typedef RequestResult Тело ответа.
 * @property {Currency} expense Исходящие средства.
 * @property {Currency} income Поступающие средства.
 * @property {number} status Статус запроса.
 * @property {string} operation Имя операции.
 */

module.exports = {};
