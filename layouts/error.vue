<template>
  <div class="wrapper">
    <h1>Произошла ошибка!</h1><br>

    <nuxt-link to="/" class="link">Вернуться на главную</nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped lang="scss">
  .wrapper {
    margin: 0 auto;
  }
  h1 {
    color: red;
    font-size: 40px;
    margin-bottom: 40px;
  }
  .link {
    font-size: 30px;
  }
</style>
