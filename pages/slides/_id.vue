<template>
  <div class="slide">
    <img src="@/static/pages/slides/1.png" alt="">
    <div class="button-wrapper">
      <NavButton icon="el-icon-arrow-right" @onClick="next_question"/>
    </div>
  </div>
</template>

<script>
  import NavButton from "@/components/NavButton";
    export default {
        name: "_id",
        components: {NavButton},
      methods: {
          next_question() {
            let path = '/victorina/'+String(Number(this.$route.params.id)+1)
            this.$router.push(path)
          }
      }
    }
</script>

<style scoped>

</style>
