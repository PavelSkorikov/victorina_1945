<template>
  <el-button type="warning" round @click="onClick">{{ text }}</el-button>
</template>

<script>
    export default {
        name: "NavButton",
      props: {
          text: String
      },
      methods: {
          onClick() {
            this.$emit('onClick')
          }
      }
    }
</script>

<style scoped lang="scss">
  .el-button {
    margin: 30px;
    width: 200px;
    height: 60px;
    font-size: 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
</style>
