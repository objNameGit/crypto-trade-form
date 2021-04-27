export const helper = {
  methods: {
    /**
     * Вернёт значение цвета валюты.
     * @param {string} currencyName Наименование валюты.
     * @returns {string}
     */
    getColor(currencyName) {
      return this.currencyColor[currencyName.toLowerCase()] || "";
    },
  },
};