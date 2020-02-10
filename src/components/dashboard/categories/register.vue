<template>

  <div style="margin-top: 50px;">

    <loader-spinner :loading="loading"></loader-spinner>

    <h1>Cadastrar notícia</h1>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="exampleInputGroup1"
                    label="Descrição"
                    label-for="Descrição">
        <b-form-input id="title"
                      type="text"
                      v-model="form.description"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>

      <br><br>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button type="button" variant="outline-danger" @click="back">Cancelar</b-button>

    </b-form>
  </div>

</template>

<script>
import categoriesService from '../../services/Categories'
import LoaderSpinner from '../../LoaderSpinner'

export default {
  name: 'register',
  components: {LoaderSpinner},
  data () {
    return {
      loading: false,
      error: null,
      selected: null,
      profiles: {},
      data: {},
      options: this.profiles,
      form: {},
      show: true

    }
  },
  methods: {
    back: () => history.back(),
    onSubmit (evt) {
      this.loading = true
      evt.preventDefault()

      this.data = {
        description: this.form.description
      }

      categoriesService
        .create(this.data)
        .then(response => {
          // console.log(response);
          this.$swal('Sucesso', 'Registro cadastrado com sucesso', 'success')
          history.back()
          this.loading = false
        })
        .catch(e => {
          console.log('catch: ', e)
          console.error(e)
          this.error = 'Erro no servidor'
          this.$swal('Aviso', 'Erro interno do servidor', 'error')
          this.loading = false
        })
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  created () {
  }
}
</script>

<style>
</style>
