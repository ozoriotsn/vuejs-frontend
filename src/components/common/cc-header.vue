<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-company-red fixed-top bg-dark">
    <router-link v-bind:to="'/'" class="navbar-brand"><img src="https://jointecnologia.com.br/wp-content/themes/theme-bones-master/library/images/logo-footer.png" height="30px"/>  Tecnologia</router-link>


    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="container">
      <a class="navbar-brand" href="#"></a>

      <ul class="nav navbar-nav">
        <li class="nav-item">
          <!--<router-link v-bind:to="'/account/login'" class="btn btn-success">LOGIN</router-link>-->
        </li>
      </ul>

    </div>
  </nav>

</template>

<script>
export default {
  name: 'Header',

  methods: {
    handleClick: function() {
      this.$emit('clickedSomething')
    }
  }
}
</script>

<style scoped>
  .bg-company-red {
    background-color: #35495e !important;
  }
</style>
