<template>
  <div class="wallet">
    <div class="wallet__icon">
      <v-icon middle>mdi-wallet-outline</v-icon>
    </div>
    <div class="wallet__currency-list currency-list">
      <div
        v-for="(currency, index) in wallet"
        :key="index"
        class="currency-list__currency currency"
      >
        <span class="currency__value">
          {{ currency.quantity }}
        </span>
        <span
          class="currency__name"
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

import { helper } from "@mixins/helper.js";

export default {
  computed: {
    ...mapGetters(["wallet", "currencyColor"]),
  },
  mixins: [helper],
};
</script>

<style scoped>
.wallet {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.wallet__icon {
  margin-right: 15px;
}

.currency__value {
  margin-right: 5px;
}
</style>
