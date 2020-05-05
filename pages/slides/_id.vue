<template>
  <div class="slide">
    <div class="img-wrapper">
      <img :src="resolve_img_url(img_path)" alt="">
    </div>
    <div class="button-wrapper">
      <NavButton icon="el-icon-arrow-right" @onClick="next_question"/>
    </div>
  </div>
</template>

<script>
  import NavButton from "@/components/NavButton";
    export default {
        name: "slide",
        components: {NavButton},
      computed: {
          img_path() {
            let path = String(this.$route.params.id) + ".png"
            return path
          }
      },
      methods: {
          next_question() {
            let path = '/victorina/'+String(Number(this.$route.params.id)+1)
            this.$router.push(path)
          },
          resolve_img_url: function (path) {
            let images = require.context('@/static/pages/slides/', false, /\.png$|\.jpg$/)
            return images("./"+path)
          }
      }
    }
</script>

<style scoped lang="scss">
  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .img-wrapper {
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: auto;
  }

</style>
