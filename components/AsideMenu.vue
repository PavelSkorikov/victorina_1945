<template>
  <el-menu
    default-active="$route.path"
    router="router"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="darkslategrey"
    text-color="grey"
    active-text-color="#fff">
    <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span>Начало</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-setting"></i>
      <span>Об авторах</span>
    </el-menu-item>
    <div class="progress-user">
      <div class="info-user">
        {{ user.name }}<br>
        {{ user.surname }}
      </div>
      <div class="steps-user">
        <el-steps direction="vertical" :active="1">
          <el-step title="Step 1"></el-step>
          <el-step title="Step 2"></el-step>
          <el-step title="Step 3"></el-step>
        </el-steps>
      </div>
    </div>
  </el-menu>
</template>

<script>
    export default {
        name: "AsideMenu",
      computed: {
        user() {
          return this.$store.getters.user;
        }
      },
      methods: {
          handleOpen() {

          },
          handleClose() {

          }
      }
    }
</script>

<style scoped lang="scss">
  .progress-user {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info-user {
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    color: white;
  }
  .steps-user {
    display: flex;
    justify-content: center;
  }
</style>
