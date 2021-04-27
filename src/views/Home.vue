<template>
  <v-card
    class="ma-auto"
    :min-width="250"
    :max-width="450"
    elevation="2"
    outlined
  >
    <v-card-text class="text-h5">
      <Wallet />
      <TradeForm
        :priceCurrency="getPriceCurrency()"
        :amountCurrency="getAmountCurrency()"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

import TradeForm from "@/components/TradeForm.vue";
import Wallet from "@/components/Wallet.vue";

export default {
  name: "Form",
  components: {
    TradeForm,
    Wallet,
  },
  computed: {
    ...mapGetters(["currencyList", "wallet"]),
  },
  methods: {
    toAbout() {
      this.$router.push("about");
    },
    getPriceCurrency() {
      return this.currencyList[0].currencyName;
    },
    getAmountCurrency() {
      return this.currencyList[1].currencyName;
    },
  },
};
</script>
