<template>
  <div class="form-container">
    <v-form>
      <div class="form-container__input-list">
        <CustomInput
          :type="'Float'"
          :inputName="'Price'"
          :currencyName="price.currencyName"
          :calculateSettings="calculateSettings"
          :inputValue.sync="priceQuantity"
        />

        <CustomInput
          :type="'Float'"
          :inputName="'Amount'"
          :currencyName="amount.currencyName"
          :calculateSettings="calculateSettings"
          :inputValue.sync="amountQuantity"
        />

        <CustomInput
          :type="'Float'"
          :inputName="'Total ~'"
          :currencyName="price.currencyName"
          :placeholder="'min 0.005'"
          :calculateSettings="calculateSettings"
          :inputValue.sync="totalSum"
        />
      </div>

      <div class="form-container__action-button-list action-button-list">
        <v-btn
          class="action-button-list__buy-button"
          @click="buyCurrency"
          :disabled="!this.isFormValid || operationSellInProgress"
          :loading="operationBuyInProgress"
          color="success"
          width="70%"
          button-list
          elevation="0"
        >
          {{ operationType.buy }}
        </v-btn>
        <v-btn
          class="action-button-list__sale-button"
          @click="sellCurrency"
          :disabled="!this.isFormValid || operationBuyInProgress"
          :loading="operationSellInProgress"
          color="red"
          elevation="0"
          depressed
          outlined
        >
          {{ operationType.sell }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/**
 * @typedef {import("../libs/types.js").RequestBody} RequestBody
 * @typedef {import("../libs/types.js").Currency} Currency
 */
import axios from "axios";
import { mapGetters } from "vuex";

import CustomInput from "@/components/CustomInput.vue";

import { calculateUtils } from "@mixins/calculateUtils.js";

import { OPERATION_TYPE } from "@consts/operationType.js";
import { OPERATION_STATUS } from "@consts/operationStatus.js";

export default {
  name: "TradeForm",
  props: {
    priceCurrency: {
      type: String,
      required: false,
    },
    amountCurrency: {
      type: String,
      required: false,
    },
  },
  components: {
    CustomInput,
  },
  mixins: [calculateUtils],
  computed: {
    ...mapGetters(["calculateSettings", "wallet"]),
    priceQuantity: {
      get: function () {
        return this.price.quantity;
      },
      set: function (value) {
        this.price.quantity = value;
      },
    },
    amountQuantity: {
      get: function () {
        return this.amount.quantity;
      },
      set: function (value) {
        this.amount.quantity = value;
      },
    },
    isFormValid: function () {
      return (
        this.amountQuantity !== 0 &&
        this.priceQuantity !== 0 &&
        this.totalSum !== 0
      );
    },
    operationType: function () {
      return OPERATION_TYPE;
    },
    operationBuyInProgress: function () {
      return (
        this.operationInfo.status === OPERATION_STATUS.inProgress &&
        this.operationInfo.operation === OPERATION_TYPE.buy
      );
    },
    operationSellInProgress: function () {
      return (
        this.operationInfo.status === OPERATION_STATUS.inProgress &&
        this.operationInfo.operation === OPERATION_TYPE.sell
      );
    },
  },
  data() {
    return {
      price: {
        currencyName: "",
        quantity: 0,
      },
      amount: {
        currencyName: "",
        quantity: 0,
      },
      totalSum: 0,
      operationInfo: {
        status: "",
        operation: "",
      },
    };
  },
  watch: {
    priceQuantity: function () {
      this.totalSum = this.getToFixedValue(
        this.amountQuantity * this.priceQuantity,
        this.calculateSettings.precision
      );
    },
    amountQuantity: function () {
      this.totalSum = this.getToFixedValue(
        this.priceQuantity * this.amountQuantity,
        this.calculateSettings.precision
      );
    },
    totalSum: function () {
      this.recalcValues();
    },
  },
  methods: {
    /**
     * Пересчитает значения на форме.
     * @return {undefined}
     */
    recalcValues() {
      if (this.totalSum === 0) {
        return;
      }

      if (this.priceQuantity !== 0) {
        this.amountQuantity = this.getToFixedValue(
          this.totalSum / this.priceQuantity,
          this.calculateSettings.precision
        );
      }

      if (this.priceQuantity === 0 && this.amountQuantity !== 0) {
        this.priceQuantity = this.getToFixedValue(
          this.totalSum / this.amountQuantity,
          this.calculateSettings.precision
        );
      }
    },
    /**
     * Пересчитает итоговую сумму.
     * @return {number}
     */
    recalcTotalSum(value) {
      const result = !this.isFormValid
        ? 0
        : this.getToFixedValue(
            value / this.priceQuantity,
            this.calculateSettings.precision
          );

      return result;
    },
    /**
     * Вернёт валюту из кошелька.
     * @param {string} currencyName Наименование валюты.
     * @return {Currency}
     */
    getCurrencyFromWallet(currencyName) {
      return this.wallet.find(
        (currency) => currency.currencyName === currencyName
      );
    },
    /**
     * Установит актуальное значение валюты в кошельке.
     * @param {Currency} currencyInfo Валюта.
     * @param {boolean} isSubstract Признак указывающий действие.
     */
    setActualCurrencyValue(currencyInfo, isSubstract) {
      const currencyInWallet = this.getCurrencyFromWallet(
        currencyInfo.currencyName
      );
      const rawQuantity = isSubstract
        ? currencyInWallet.quantity - currencyInfo.quantity
        : currencyInWallet.quantity + currencyInfo.quantity;

      const actualQuantity = this.getToFixedValue(
        rawQuantity,
        this.calculateSettings.precision
      );

      this.$store.dispatch("changeCurrencyInWallet", {
        currencyName: currencyInfo.currencyName,
        quantity: actualQuantity,
      });
    },
    /**
     * Изменит количество валюты в кошельке.
     * @param {RequestBody} body Тело запроса.
     */
    changeCurrencyInWallet({ expense, income }) {
      this.setActualCurrencyValue(expense, true);
      this.setActualCurrencyValue(income, false);
    },
    /**
     * Сделает запрос c необходимыми параметрами.
     * @param {RequestBody} body Тело запроса.
     * @param {string} operationName Наименование операции.
     * @return {undefined}
     */
    async makeRequset(body, operationName) {
      // Здесь должен быть запрос axios.post(url, body);
      const header = {
        "Content-Type": "application/json",
      };
      const url = "https://test.stock.com";

      const result = await new Promise((resolve) => {
        setTimeout(() => {
          const response = { ...body };

          response.status = 200;
          response.operation = operationName;

          resolve(response);
        }, 2000);
      }).catch((err) => {
        alert(err);
      });

      return result;
    },
    /**
     * Создаст тело запроса
     * @param {string} operationName Наименование операции.
     * @return {RequestBody} Тело запроса.
     */
    createBody(operationName) {
      const body = {
        expense: {},
        income: {},
      };

      if (operationName === OPERATION_TYPE.buy) {
        body.expense = {
          currencyName: this.price.currencyName,
          quantity: this.totalSum,
        };
        body.income = {
          currencyName: this.amount.currencyName,
          quantity: this.amountQuantity,
        };
      }

      if (operationName === OPERATION_TYPE.sell) {
        body.expense = {
          currencyName: this.amount.currencyName,
          quantity: this.amount.quantity,
        };
        body.income = {
          currencyName: this.price.currencyName,
          quantity: this.totalSum,
        };
      }

      return body;
    },
    /**
     * Сделает запрос c необходимыми параметрами.
     * @param {string} operationName Наименование операции.
     * @return {boolean}
     */
    async doOperation(operationName) {
      this.operationInfo.status = OPERATION_STATUS.inProgress;
      this.operationInfo.operation = operationName;

      const body = this.createBody(operationName);
      const result = await this.makeRequset(body, operationName);

      if (result.status === 200) {
        this.changeCurrencyInWallet(result);
      }

      this.operationInfo.status = OPERATION_STATUS.ended;

      return result;
    },
    /**
     * Купить валюту.
     * @return {boolean} Результат операции.
     */
    async buyCurrency() {
      const result = await this.doOperation(OPERATION_TYPE.buy);

      return result;
    },
    /**
     * Продать валюту.
     * @return {boolean} Результат операции.
     */
    async sellCurrency() {
      const result = await this.doOperation(OPERATION_TYPE.sell);

      return result;
    },
  },
  created() {
    this.$root.$on("change-custom-input", (valueObj) => {
      this[valueObj.propsName] = parseFloat(valueObj.value);
    });
  },
  mounted() {
    this.price.currencyName = this.priceCurrency;
    this.amount.currencyName = this.amountCurrency;
  },
};
</script>

<style scoped>
.action-button-list {
  display: flex;
  margin-top: 35px;
  margin-bottom: 15px;
}

.action-button-list__buy-button {
  flex-grow: 2;
  margin-right: 16px;
}

.action-button-list__sale-button {
  border-width: 2px;
}

.v-btn {
  font-size: 1.3rem !important;
}
</style>
