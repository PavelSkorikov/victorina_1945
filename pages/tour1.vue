<template>
  <div class="slide1">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">1 ТУР</span>
      </div>
        <span>Вопросы по истории</span>
    </el-card>
    <div class="button-wrapper">
      <NavButton icon="el-icon-arrow-right" @onClick="$router.push('/victorina/1')"/>
    </div>
  </div>
</template>

<script>
    import NavButton from "../components/NavButton";
    export default {
        name: "slide1",
      components: {NavButton}
    }
</script>

<style scoped lang="scss">
  .el-card {
    max-width: 1000px;
    font-size: 90px;
    background-color: wheat;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    @media (max-width: 600px) {
      font-size: 40px;
    }
  }
  .clearfix {
    font-size: 180px;
    @media (max-width: 600px) {
      font-size: 90px;
    }
  }
</style>
