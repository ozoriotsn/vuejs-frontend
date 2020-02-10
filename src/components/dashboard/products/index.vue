<template>

  <div style="margin-top: 50px;">

    <loader-spinner :loading="loading"></loader-spinner>
    <div v-if="!loading">

      <h1>Produtos
        <router-link v-bind:to="'/dashboard/products/register'" class="pull-right btn btn-success"><i
          class="fa fa-plus"></i> Cadastrar
        </router-link>
      </h1>

      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Código</th>
          <th>Categoria</th>
          <th>Opções</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="item in products " :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.description}}</td>
          <td>{{item.value}}</td>
          <td>{{item.code}}</td>
          <td>
            <ul>
              <li v-for="category in item.category " :key="category.id">
                {{category.description}}
              </li>
            </ul>

          </td>
          <td>
            <b-button size="sm" class="mr-2" variant="primary" v-bind:href="'#/dashboard/products/edit/'+item.id"><i
              class="fa fa-edit"></i> Editar
            </b-button>
            <b-button size="sm" class="mr-2" variant="danger" v-on:click="deleteProducts(item.id)"><i
              class="fa fa-trash"></i> Excluir
            </b-button>
          </td>
        </tr>

        </tbody>
      </table>

      <b-row>
        <b-col md="6" class="my-1">

          <b-pagination
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
            v-on:input="pageChange"/>

        </b-col>
      </b-row>

    </div>

  </div>

</template>

<script>
import productsService from '../../services/Products'
import LoaderSpinner from '../../LoaderSpinner'

export default {
  name: 'index',
  components: {LoaderSpinner},

  data () {
    return {
      loading: true,
      error: null,
      products: [],
      currentPage: 1,
      perPage: 10,
      totalRows: this.total,
      page: 1
    }
  },

  methods: {
    loadProducts () {
      this.loading = true
      productsService
        .find()
        .then(response => {
          this.products = response.data.data
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
    deleteProducts (id) {
      this.$swal({
        title: 'Você tem certeza?',
        text: 'Você não pode reverter esta ação',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim excluir!',
        cancelButtonText: 'Não excluir!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          // eslint-disable-next-line no-undef
          productsService
            .remove(id)
            .then(response => {
              console.log(response)
              this.$swal('Sucesso', 'Registro excluido com sucesso', 'success')
              this.loadProducts()
              this.loading = false
            })
            .catch(e => {
              console.log(e)
              console.error(e)
              this.error = 'Erro no servidor'
              this.loading = false
            })
        } else {
          this.$swal('Aviso', 'A ação foi cancelada', 'info')
        }
      })

      this.loading = false
    },
    pageChange (pageNum) {
      console.log(pageNum)

      this.loading = true
      productsService
        .find(pageNum)
        .then(response => {
          this.products = response.data.data
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
    }
  },
  created () {
    this.loadProducts()
  }
}
</script>

<style scoped>
</style>
