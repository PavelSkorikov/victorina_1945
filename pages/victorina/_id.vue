<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{question.question}}</span>
    </div>
    <ul>
      <li class="answer" v-for="n in 4">
        <el-radio v-model="answer" :label="n">
          <span>{{question[n]}}</span>
        </el-radio>
      </li>
    </ul>
  </el-card>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
            answer: ''
          }
        },
      validate({params}) {
          return /^\d+$/.test(params.id)
      },
      mounted() {
        this.$store.commit('setActiveStep', this.$route.params.id);
      },
      computed: {
          question() {
            return this.$store.getters.question(this.$route.params.id)
          }
      }
    }
</script>

<style scoped lang="scss">
  .el-card {
    width: 400px;

  }
  .clearfix {
    color: darkred;
    font-size: 2rem;
  }
  .answer {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
  }
  .el-radio span {
    font-size: 18px;
  }
</style>
