<template>
  <v-app>
    <v-card
      class="ma-auto"
      :min-width="250"
      :max-width="600"
      elevation="2"
      outlined
    >
      <v-card-text class="text-h5">
        <Wallet />
        <TradeForm :wallet="wallet" />
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import TradeForm from "@/components/TradeForm.vue";
import Wallet from "@/components/Wallet.vue";

export default {
  name: "App",
  components: {
    TradeForm,
    Wallet,
  },
  computed: {
    ...mapGetters(["currencyList", "wallet"]),
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  font-size: 10px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
</style>
