<template>
  <section class="finish-page" v-if="isUser">
    <div class="congradulations" v-if="isFinalist">
      <el-card class="box-card">
          <div class="title">ПОЗДРАВЛЯЕМ!</div>
          <div class="user">{{user.name}}</div>
          <div class="user">{{user.surname}}</div>
          <div class="user">Ученик {{user.class}}а</div>
          <div class="user" v-if="user.school_name">Учебного заведения: {{user.school_name}}</div>
      </el-card>
      <el-card class="info box-card">
        Вы прошли викторину с результатом {{result}} правильных ответов
        <NavButton text="ОК" @onClick="$router.push('/')"/>
      </el-card>
    </div>
    <div class="loose" v-if="!isFinalist">
      <el-card class="box-card">
        <div class="user">{{user.name}}</div>
        <div class="user">{{user.surname}}</div>
        <div class="title">НЕ УНЫВАЙТЕ, ОШИБКИ - НАШИ ЛУЧШИЕ УЧИТЕЛЯ!</div>
      </el-card>
      <el-card class="info box-card">
        <div>Ваш результат - {{result}}.</div>
        <div>Для победы нужно набрать более 50%</div>
        <NavButton text="Попробовать еще раз" @onClick="$router.push('/')"/>
      </el-card>
    </div>
  </section>
</template>

<script>
    import NavButton from "../components/NavButton";
    export default {
        name: "finish",
        data() {
          return {
            isUser: true,
            isFinalist: false,
          }
        },
        components: {NavButton},
        computed: {
          user() {
            let user_data = this.$store.getters.user
            return user_data
          },
          result() {
            let percent = Math.round((this.user.rating/this.$store.getters.count_steps) * 100)
            if(percent>50) this.isFinalist = true
            if(!percent) this.isUser = false
            return String(percent)+'%'
          }
        }
    }
</script>

<style scoped lang="scss">
  .finish-page {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .congradulations {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .loose {
    ax-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .el-card {
    max-width: 600px;
    height: auto;
    opacity: .6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 40px;
  }
  .title {
    font-size: 3rem;
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
  .user {
    font-size: 2rem;
  }
  .info {
    color: darkred;
    font-size: 2rem;
  }
</style>
