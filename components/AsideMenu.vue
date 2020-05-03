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
        <el-steps v-if="isLogin" direction="vertical" :active="active_step">
          <el-step v-for="n in count_steps" :key="n">{{n}}</el-step>
        </el-steps>
      </div>
    </div>
  </el-menu>
</template>

<script>
    export default {
        name: "AsideMenu",
      data() {
        return {

        };
      },
      computed: {
        user() {
          return this.$store.getters.user;
        },
        isLogin() {
          return this.$store.getters.islogin;
        },
        count_steps() {
          return this.$store.getters.count_steps;
        },
        active_step() {
          return String(this.$store.getters.active_step);
        },
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
