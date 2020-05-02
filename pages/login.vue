<template>
  <section class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Для начала введите Ваши данные:</span>
      </div>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-position="left">
        <el-form-item label="Имя" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Фамилия" prop="surname">
          <el-input v-model="form.surname"></el-input>
        </el-form-item>
        <el-form-item label="Школа" prop="school_name">
          <el-input v-model="form.school_name"></el-input>
        </el-form-item>
        <el-form-item label="Класс" prop="class">
          <el-select v-model="form.class">
            <el-option v-for="item of form.classes" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <NavButton text="Старт" @onClick="onSubmit"/>
    </el-card>
  </section>
</template>

<script>
    import NavButton from "../components/NavButton";
    export default {
        name: "login",
      components: {NavButton},
      data() {
        return {
          form: {
            school_name: '',
            class: '',
            classes: ['1 класс','2 класс','3 класс','4 класс','5 класс','6 класс','7 класс','8 класс','9 класс','10 класс','11 класс'],
            name: '',
            surname: '',
          },
          rules: {
            name: [
              { required: true, message: 'Ведите имя', trigger: 'blur' },
              { min: 3, max: 20, message: 'от 3 до 20 символов', trigger: 'blur' }
            ],
            surname: [
              { required: true, message: 'Введите фамилию', trigger: 'blur' },
              { min: 3, max: 20, message: 'от 3 до 20 символов', trigger: 'blur' }
            ],
            school_name: [
              { required: true, message: 'Введите название Вашего учебного заведения', trigger: 'blur' },
              { min: 2, max: 100, message: 'от 2 до 100 символов', trigger: 'blur' }
            ],
            class: [
              { required: true, message: 'Выберите ваш учебный класс', trigger: 'blur'}
            ],
          }
        }
      },
      methods: {
        onSubmit() {
          this.$refs['form'].validate((valid) => {
            if (valid) {
              this.$store.commit('setUser', this.form);
              this.$router.push('/slides/slide1')
            } else {
              this.$notify.error({
                title: 'Ошибка',
                message: 'Не все данные введены правильно, попробуйте еще раз.'
              });
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .el-card {
    max-width: 800px;
    font-size: 20px;
    background-color: wheat;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
</style>
