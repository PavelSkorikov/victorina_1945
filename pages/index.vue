<template>
  <section class="title-page">
    <el-card shadow="always" class="info-card">
      Добрый день,  дорогие ребята! <br>
      Мы рады приветствовать всех вас  на интеллектуальной игре «Что мы знаем о Великой Отечественной войне». <br>
      Наша викторина посвящена славным историческим датам, которые  празднует Российский народ  в этом году. Приближается великая дата для всей нашей родины. 75-лет  тому назад  советские солдаты завоевали мир для нашего народа. Эта дата навечно вписана в историю  страны. Победа в Великой Отечественной войне (1941-1945 гг.) досталась нам дорогой ценой.
      <br>
      И вы сможете проверить свои знания об этих событиях.
    </el-card>
    <NavButton text="Начать"/>
  </section>
</template>

<script>
import NavButton from "../components/NavButton";
export default {
  components: {NavButton},

}
</script>

<style lang="scss" scoped>
.info-card {
  max-width: 600px;
  opacity: .6;
  display: flex;
  font-size: 20px;
}

</style>
