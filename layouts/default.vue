<template>
  <el-container class="main-conteiner">
    <el-header>
      <h1>ВИКТОРИНА: «Что мы знаем о Великой Отечественной войне»</h1>
    </el-header>
    <el-container>
      <el-aside width="200px" class="hidden-xs-only">
        <AsideMenu />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AsideMenu from "../components/AsideMenu";
  export default {
    components: {AsideMenu},
  }
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  margin: 0;
}
.main-conteiner {
  background: darkslategrey;
}
.el-header {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid white;
}
h1 {
  color: white;
  font-size: 2em;
  @media (max-width: 1060px) {
    font-size: 1.5em;
  }
  @media (max-width: 400px) {
    font-size: 1em;
  }
}
.el-main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background: url("../static/pages/titul-fon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
