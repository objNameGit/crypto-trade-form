/**
 * Форматирует передаваемое заменяя точку на запятую.
 * @param {number|string} value Значение.
 * @returns {string}
 */
export function dotReplace(value) {
  let result = "";

  if (value !== null || !isNaN(value) || value !== undefined) {
    result = String(value).replace(".", ",");
  }

  return result;
}
