<template>

  <div style="margin-top: 50px;">

    <loader-spinner :loading="loading"></loader-spinner>
    <div v-if="!loading">

      <h1>Categorias
        <router-link v-bind:to="'/dashboard/categories/register'" class="pull-right btn btn-success"><i
          class="fa fa-plus"></i> Cadastrar
        </router-link>
      </h1>

      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Descrição</th>
          <th>Total Produtos</th>
          <th>Opções</th>
        </tr>
        </thead>
        <tbody>

        <tr v-if="categories" v-for="item in categories " :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.description}}</td>
          <td><span class="badge badge-dark " v-if="item.product">{{item.product.count}}</span></td>

          <td>
            <b-button size="sm" class="mr-2" variant="primary" v-bind:href="'#/dashboard/categories/edit/'+item.id"><i
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
import categoriesService from '../../services/Categories'
import LoaderSpinner from '../../LoaderSpinner'

export default {
  name: 'index',
  components: {LoaderSpinner},

  data () {
    return {
      loading: true,
      error: null,
      categories: [],
      productsCount: [],
      currentPage: 1,
      perPage: 10,
      totalRows: this.total
    }
  },

  methods: {
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
          categoriesService
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
      this.loading = true
      categoriesService
        .find(pageNum)
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
    }
  },
  created () {
    this.loadCategories()
  }
}
</script>

<style scoped>
</style>
