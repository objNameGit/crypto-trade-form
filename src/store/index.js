import Vue from "vue";
import Vuex from "vuex";

import { wallet } from "@state/wallet.js";
import { currencyList } from "@state/currencyList.js";
import { currencyColor } from "@state/currencyColor.js";
import { calculateSettings } from "@state/calculateSettings.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyList,
    wallet,
    currencyColor,
    calculateSettings,
  },
  mutations: {
    setCurrencyList(state, value) {
      state.currencyList = value;
    },
    setCurrencyInWallet(state, { currencyName, quantity }) {
      const currencyInWallet = state.wallet.find(
        (currency) => currency.currencyName === currencyName
      );

      currencyInWallet.quantity = quantity;
    },
  },
  actions: {
    changeCurrencyList({ commit }, value) {
      commit("setCurrencyList", value);
    },
    changeCurrencyInWallet({ commit }, currencyObj) {
      commit("setCurrencyInWallet", currencyObj);
    },
  },
  getters: {
    calculateSettings(state) {
      return state.calculateSettings;
    },
    currencyList(state) {
      return state.currencyList;
    },
    wallet(state) {
      return state.wallet;
    },
    currencyColor(state) {
      return state.currencyColor;
    },
  },
  modules: {},
});
