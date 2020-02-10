<template>

  <div style="margin-top: 50px;">

    <h1>Editar produto {{ $route.params.id}} </h1>
    <loader-spinner :loading="loading"></loader-spinner>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="exampleInputGroup1"
                    label="Título"
                    label-for="Título">
        <b-form-input id="title"
                      type="text"
                      v-model="form.description"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>

      <br><br>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button type="button" variant="outline-danger" @click="back" >Cancelar</b-button>

    </b-form>
  </div>

</template>

<script>
import categoriesService from '../../services/Categories'
import LoaderSpinner from '../../LoaderSpinner'

export default {
  name: 'index',
  // eslint-disable-next-line standard/object-curly-even-spacing
  components: { LoaderSpinner},

  data () {
    return {
      loading: false,
      error: null,
      imageData: '',
      news: {},
      data: {},
      currentPage: 1,
      perPage: 10,
      totalRows: this.total,
      form: {
        description: this.description
      },
      show: true
    }
  },

  methods: {
    back: () => history.back(),
    loadCategories () {
      this.loading = true
      categoriesService
        .get(this.$route.params.id)
        .then(response => {
          // console.log(response);
          this.form = response.data
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          console.error(e)
          this.error = 'Erro no servidor'
          this.loading = false
        })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.loading = true
      this.data = {
        description: this.form.description
      }
      console.log('this.data', this.data)

      categoriesService
        .update(this.$route.params.id, this.data)
        .then(response => {
          console.log(response)
          this.form = response.data
          this.loading = false
          this.$swal('Sucesso', 'Dados atualizados com sucesso', 'success')
          window.location.href = '/#/dashboard/categories'
        })
        .catch(e => {
          console.log(e)
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
    this.loadCategories()
  }
}
</script>

<style>

</style>
