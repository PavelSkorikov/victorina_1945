<template>
  <div class="question_wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{question.question}}</span>
      </div>
      <ul>
        <li class="answer" v-for="n in 4">
          <el-radio v-model="selected_answer" :label="n">
            <span>{{question[n]}}</span>
          </el-radio>
        </li>
      </ul>
    </el-card>
    <NavButton icon="el-icon-arrow-right" @onClick="next_slide"/>
  </div>
</template>

<script>
    import NavButton from "@/components/NavButton";
    export default {
        name: "index",
      components: {NavButton},
      data() {
          return {
            selected_answer: 0,
            question_answer: 0
          }
        },
      validate({params}) {
          return /^\d+$/.test(params.id)
      },
      mounted() {
          if(this.$route.params.id > this.$store.getters.count_steps) {
            this.$router.push('/finish')
          }
          else if(this.$route.params.id > this.$store.getters.current_question) {
            this.$store.commit('setCurrentQuestion');
          }
          else this.$router.push('/');
      },
      computed: {
          question() {
            let question = this.$store.getters.question(this.$route.params.id)
            this.question_answer = question.ans
            return question
          }
      },
      methods: {
          next_slide() {
            if(this.selected_answer > 0) {
              if (this.selected_answer == this.question_answer) {
                this.$store.commit('setUserRating')
              }
              let path = '/slides/' + this.$route.params.id
              this.$router.push(path)
            }
            else {
              this.$notify.warning({
                title: 'Внимание!',
                message: 'Выберите вариант ответа'
              });
            }
          }
      }
    }
</script>

<style scoped lang="scss">
  .question_wrapper {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .el-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .clearfix {
    color: darkred;
    font-size: 20px;
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
