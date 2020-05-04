<template>
  <div class="wrapper">
    <h1>Произошла ошибка!</h1><br>
    <el-card shadow="always">
      Что-то пошло не так :(
    </el-card>
    <NavButton text="На главную" @onClick="$router.push('/')"/>
  </div>
</template>

<script>
    import NavButton from "../components/NavButton";
    export default {
        name: "error",
      components: {NavButton},
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
  .el-card {
    max-width: 600px;
    opacity: .6;
    display: flex;
    font-size: 20px;
  }
  .link {
    font-size: 30px;
  }
</style>
