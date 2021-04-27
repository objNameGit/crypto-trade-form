<template>
  <v-app class="app">
    <div
      class="app__link hidden-link unselectable"
      v-if="isVisible"
      @click="toEasterEgg"
    >
      Перейти к Foo
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    isVisible: function () {
      return this.$route.name !== "EasterEgg";
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    toEasterEgg() {
      const validNum = 2;

      this.counter += 1;

      if (this.counter > validNum) {
        this.$router.push("/easter-egg");

        this.counter = 0;
      }

      return;
    },
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

.hidden-link {
  opacity: 0;
  position: absolute;
  cursor: default;
  height: 15px;
  right: 15px;
  top: 15px;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
