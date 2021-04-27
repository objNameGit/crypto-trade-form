export const calculateUtils = {
  methods: {
    /**
     * Форматирует число согласно заданной точности.
     * @param {number} value Значение.
     * @param {number} precision Точность.
     * @return {number} Число с необходимой точностью.
     */
    getToFixedValue(value, precision) {
      return parseFloat(value.toFixed(precision));
    },
    /**
     * Проверит является ли число положительным.
     * @param {number} value Значение.
     * @return {boolean}
     */
    isNegativeValue(value) {
      return value < 0;
    },
  },
};
