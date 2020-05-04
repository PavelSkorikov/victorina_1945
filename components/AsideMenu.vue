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
    <el-menu-item index="" @click="drawer=true">
      <i class="el-icon-setting"></i>
      <span>Об авторах</span>
    </el-menu-item>
    <el-drawer
      title="about"
      size="20%"
      :visible.sync="drawer"
      :with-header="false">
      <div class="about">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Автор идеи, дизайн, контент:</span>
          </div>
          <p>Педагог дополнительного школьного образования, Чертковского Детского дома творчества</p>
          <br>
          <p style="font-style: italic">Скорикова Т.А.</p>
          <p><a href="mailto:cta00@mail.ru">email: cta00@mail.ru</a></p>
        </el-card>
        <br>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Разработка:</span>
          </div>
          <p style="font-style: italic">Скориков П.Г.</p>
          <p><a href="mailto:spg75@yandex.ru.ru">email: spg75@yandex.ru</a></p>
        </el-card>
      </div>
    </el-drawer>
    <div class="progress-user">
      <div class="info-user">
        {{ user.name }}<br>
        {{ user.surname }}
      </div>
      <div class="steps-user">
        <el-steps v-if="isLogin" direction="vertical" :active="active_step">
          <el-step v-for="n in count_steps" :key="n" style="font-size: 24px">{{n}}</el-step>
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
          drawer: false
        };
      },
      computed: {
        user() {
          return this.$store.getters.user;
        },
        isLogin() {
          if(this.$store.getters.user.name) return true;
        },
        count_steps() {
          return this.$store.getters.count_steps;
        },
        active_step() {
          return String(this.$store.getters.current_question);
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
  .about {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: wheat;
  }
  .el-card {
    background-color: wheat;
  }
  .clearfix span {
    font-weight: bold;
  }
</style>
