<template>

  <div style="margin-top: 50px;">

    <loader-spinner :loading="loading"></loader-spinner>

    <h1>Cadastrar Produto</h1>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="exampleInputGroup1"
                    label="Descrição"
                    label-for="Descrição">
        <b-form-input id="title"
                      type="text"
                      v-model="form.description"
                      required
                      placeholder="Nome do produto">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Valor"
                    label-for="Título">
        <b-form-input id="title"
                      type="text"
                      v-model="form.value"
                      v-money="money"
                      required
                      placeholder="R$ 100,00">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="Código"
                    label-for="Título">
        <b-form-input id="title"
                      type="text"
                      v-model="form.code"
                      required
                      placeholder="100">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Categorias:" label-for="input-3">
        <select v-model="form.category" class="custom-select " id="input-3">
          <option v-for="category in categories" v-bind:key="category.id" v-on:click="selectedCategory(category)">
            {{category.description}}
          </option>
        </select>

      </b-form-group>

      <div>
        Categorias selecionadas:
        <br>
        <br>

        <b-badge v-for="cat in categoriesSelected " v-bind:key="cat.id" class="category" variant="primary">
          {{cat.description}} <a data-target="" class="remove-item" v-on:click="removeSelectedCategory(cat.id)">X</a>
        </b-badge>
      </div>

      <br><br>

      <b-button type="submit" variant="success">Salvar</b-button>
      <b-button type="button" variant="outline-danger" @click="back">Cancelar</b-button>

    </b-form>
  </div>

</template>

<script>
import productsService from '../../services/Products'
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
      show: true,
      imageData: '',
      categories: [],
      categoriesSelected: [],
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: ' ',
        precision: 2,
        masked: false /* doesn't work with directive */
      }
    }
  },
  methods: {
    back: () => history.back(),
    onSubmit (evt) {
      this.loading = true
      evt.preventDefault()

      let str = this.form.value
      let money = str.replace(',', '.')

      this.data = {
        description: this.form.description,
        value: money,
        code: this.form.code,
        category: this.categoriesSelected
      }

      console.log('save data', JSON.stringify(this.data))

      productsService
        .create(this.data)
        .then(response => {
          // console.log(response);
          this.$swal('Sucesso', 'Registro cadastrado com sucesso', 'success')
          history.back()
          this.loading = false
        })
        .catch(error => {
          console.log(error.response)
          this.error = 'Erro no servidor'
          this.$swal('Aviso', 'Erro interno do servidor <br>' + error.response.data.message, 'warning')
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
    },
    loadCategories () {
      this.loading = true
      categoriesService
        .find()
        .then(response => {
          this.categories = response.data.data
          this.total = response.data.total
          this.totalRows = response.data.total
          this.loading = false
        })
        .catch(e => {
          console.log(e)
          console.error(e)
          this.error = 'Erro no servidor'
          this.loading = false
        })
    },
    selectedCategory (evt) {
      let check = this.categoriesSelected.includes(evt)
      if (!check) {
        this.categoriesSelected.push(evt)
      }
    },
    removeSelectedCategory (evt) {
      this.categoriesSelected.splice(-1, evt)
    }
  },
  created () {
    this.loadCategories()
  }
}
</script>

<style>
  .category {
    padding: 10px;
    margin: 5px;
  }

  .remove-item {
    color: #fff;
    font-size: 15px;
    padding: 5px;
    cursor: pointer;

  }

</style>
