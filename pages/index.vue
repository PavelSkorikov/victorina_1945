<template>
  <section class="title-page">
    <el-card shadow="always">
      Добрый день,  дорогие ребята! <br>
      Мы рады приветствовать всех вас  на развивающей викторине «Что мы знаем о Великой Отечественной войне». <br>
      Она посвящена славной исторической дате, когда советские солдаты завоевали мир для нашего народа. Эта дата навечно вписана в историю  страны. Победа в Великой Отечественной войне (1941-1945 гг.) досталась нам дорогой ценой.
      <br>
      И вы сможете проверить свои знания об этих событиях.
    </el-card>
    <el-card shadow="always">
      ВНИМАНИЕ!<br>
      По правилам викторины нельзя возвращаться на предыдущую страницу или перезагружать текущую.<br>
      В этом случае Вы будете возвращены в начало викторины.
    </el-card>
    <NavButton text="Начать" @onClick="handleClick"/>
  </section>
</template>

<script>
import NavButton from "../components/NavButton";
export default {
  components: {NavButton},
  mounted() {
    this.$store.commit('clearUser')
  },
  methods: {
    handleClick() {
      this.$router.push('/login')
    }
  }

}
</script>

<style lang="scss" scoped>
.el-card {
  max-width: 500px;
  opacity: .6;
  display: flex;
  font-size: 20px;
}

</style>
