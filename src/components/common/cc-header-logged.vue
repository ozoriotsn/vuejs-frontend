<template>

  <b-navbar toggleable="md" type="dark" variant="dark" class="navbar navbar-expand-md navbar-dark bg-company-red fixed-top bg-dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand ><router-link v-bind:to="'#'" class="navbar-brand"><img src="https://jointecnologia.com.br/wp-content/themes/theme-bones-master/library/images/logo-footer.png" height="30px"/>  Tecnologia</router-link></b-navbar-brand>
    <!--<router-link v-bind:to="'/'" class="navbar-brand"><img src="../../assets/logo.png" height="30px"/> SAÚDE BUCAL V1.0</router-link>-->
    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em> Admin</em>
          </template>
          <b-dropdown-item href="#"><i class="fa fw fa-user"></i> Perfil</b-dropdown-item>
          <b-dropdown-item v-on:click="logout()" class="text-danger"><i class="fa fw fa-power-off"></i> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
import authService from '../services/Auth'

export default {
  name: 'cc-header-logged',

  methods: {
    handleClick: function () {
      this.$emit('clickedSomething')
    },
    logout () {
      this.loading = true

      authService
        .logout()
        .then(response => {
          this.data = response
          this.loading = false
          sessionStorage.removeItem('token')
          sessionStorage.clear()
          this.$router.push('/')
        })
        .catch(response => {
          console.log(response)
          console.error(response)
          this.error = response.response.data.error.message
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
  .bg-company-red {
    background-color: #35495e !important;
  }
</style>
