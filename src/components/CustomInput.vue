<template>
  <div class="custom-input-container">
    <div class="custom-input-container__custom-input custom-input">
      <div class="custom-input__label custom-input_margin_right">
        <label :for="inputName"> {{ inputName }} </label>
      </div>
      <input
        ref="customInputQuantity"
        type="number"
        min="0"
        max="1000000000000000"
        class="custom-input__input-field custom-input_margin_right"
        :id="inputName"
        :placeholder="placeholder"
        :value="inputValue"
        :step="calculateSettings.step"
        @input="formatInputString($event.target.value)"
        @change="updateValue($event.target.value)"
      />
        <!-- @input="formatInputString($event.target.value)"
        @change="updateValue($event.target.value)" -->
      <div class="custom-input__currency-name custom-input_margin_right">
        <label :for="inputName"> {{ currencyName }} </label>
      </div>
    </div>
    <div class="custom-input__input-controls input-controls">
      <button
        type="button"
        class="input-controls__button increase-button"
        @click="stepUp"
      >
        <v-icon small>mdi-chevron-up</v-icon>
      </button>
      <hr class="input-controls__division" />
      <button
        type="button"
        class="input-controls__button button-decrease"
        @click="stepDown"
        :disabled="isDecreaseDisabled"
      >
        <v-icon small>mdi-chevron-down</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { calculateUtils } from "@mixins/calculateUtils.js";

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    inputValue: {
      type: Number,
      required: true,
      default: 0,
    },
    currencyName: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    calculateSettings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDecreaseDisabled: function () {
      return this.inputValue === 0;
    },
  },
  mixins: [calculateUtils],
  methods: {
    /**
     * Увеличит значение на "шаг".
     * @return {undefined}
     */
    stepUp() {
      this.$refs.customInputQuantity.stepUp();

      const newValue = this.$refs.customInputQuantity.value;

      this.updateValue(newValue);
    },
    /**
     * Уменьшит значение на "шаг".
     * @return {undefined}
     */
    stepDown() {
      this.$refs.customInputQuantity.stepDown();

      const newValue = this.$refs.customInputQuantity.value;

      this.updateValue(newValue);
    },
    /**
     * Форматирует вводимое значение..
     * @param {number} value Значение.
     * @return {undefined}
     */
    formatInputString(value) {
      let result = null;

      if (value === "") {
        result = 0;
      } else {
        result = value < 0 ? Math.abs(value) : value;
      }

      this.$refs.customInputQuantity.value = result;
    },
    /**
     * Обновит значение в input.
     * @param {number} value Значение.
     * @return {undefined}
     */
    updateValue(value) {
      const parsedValue = parseFloat(value);

      this.$emit("update:inputValue", parsedValue);
    },
  },
  mounted() {
    this.$refs.customInputQuantity.value = "";
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

button:disabled {
  opacity: 0.3;
}

input.custom-input__input-field::placeholder {
  font-size: 1.6rem;
}

.custom-input-container:focus-within {
  border: 2px solid #6894d6;
}

.input-controls__button:not(:disabled):hover {
  background-color: #dddddd;
  z-index: 0;
}

.input-controls__button:active {
  background-color: #575757;
}

.custom-input-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border: 2px solid #c9c9c9;
  border-radius: 5px;
  height: 100%;
  color: #7d7d7d;
  min-height: 35px;
  margin-bottom: 16px;
}

.custom-input {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

.custom-input__label {
  margin-left: 16px;
}

.custom-input__input-field {
  font-size: 1.6rem;
  flex-grow: 1;
  outline: none;
  text-align: end;
}

.input-controls {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: stretch;
  background-color: #f9f9f9;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 2px solid #c9c9c9;
  font-size: 1rem;
  width: 35px;
}

.input-controls__division {
  height: 1px;
  overflow: hidden;
  background-color: #c9c9c9;
  border: none;
}

.custom-input-currency-name {
  text-transform: uppercase;
}

.custom-input_margin_right {
  margin-right: 16px;
}
</style>
