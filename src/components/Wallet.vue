<template>
  <div class="wallet">
    <div class="wallet__icon">
      <v-icon middle>mdi-wallet-outline</v-icon>
    </div>
    <div class="wallet__currency-list currency-list currency-list_table">
      <div
        v-for="(currency, index) in wallet"
        :key="index"
        class="currency-list__currency currency currency-list_row"
      >
        <span
          class="currency__value currency-list_cell darken-3"
          :class="{ 'warning-color': isNegativeValue(currency.quantity) }"
        >
          {{ currency.quantity | dotReplace }}
        </span>
        <span
          class="currency__name currency-list_cell"
          :style="{ color: getColor(currency.currencyName) }"
        >
          {{ currency.currencyName }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { calculateUtils } from "@mixins/calculateUtils.js";
import { helper } from "@mixins/helper.js";

export default {
  name: "Wallet",
  computed: {
    ...mapGetters(["wallet", "currencyColor"]),
  },
  mixins: [calculateUtils, helper],
};
</script>

<style scoped>
.currency-list .currency:last-of-type {
  margin-bottom: 0;
}

.wallet {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.wallet__icon {
  margin-right: 4px;
}

.currency__value {
  margin-right: 4px;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: end;
}

.currency-list_table {
  display: table;
  border-spacing: 8px;
}

.currency-list_row {
  display: table-row;
}

.currency-list_cell {
  display: table-cell;
}

.warning-color {
  color: crimson;
}
</style>
