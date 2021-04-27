<template>
  <div class="easter-egg">
    <router-link class="easter-egg__button" to="/">Назад</router-link>
    <h1 class="easter-egg__title">Пасхалка</h1>
    <img
      class="easter-egg__image"
      src="https://i.pinimg.com/originals/97/da/81/97da81bf307c0036b78b48983f738c4f.gif"
    />
  </div>
</template>
<style scoped>
.easter-egg {
  background-color: black;
  text-align: center;
  width: 100%;
  width: 100%;
}

.easter-egg__button {
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 1.3rem;
}

.easter-egg__title {
  color: #cecece;
  margin-top: 15px;
}
</style>
