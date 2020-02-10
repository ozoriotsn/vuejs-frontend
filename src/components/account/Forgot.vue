<template>
  <div>

    <!--<code>-->
    <!--{{this.data}}-->
    <!--</code>-->
    <pulse-loader :loading="loading" :color="color" :size="size" class="loader-spinner"></pulse-loader>

    <div class="container-login">
      <router-view />
    </div>

    <div class="container">

      <div class="card card-login mx-auto mt-5">

        <div v-if="error" class="error">
          <div class="alert alert-danger"> {{ error }} </div>
        </div>

        <div class="text-center">

          <br>
          <div class="col-12"> <img class="rounded-circle" src="../../assets/icon-cdcc6d6dcda827a694dce8bfa9a1ab41113b629ef1cc11f886866af9194c81d0.png" alt="Icon" height="130"></div>

        </div>

        <div class="card-header">Recuperar senha</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>

            <button class="btn btn-primary btn-block" v-on:click="sendData">Login</button>
          </form>
          <div class="text-center">
            <!--<a class="d-block small mt-3" href="register.html">Register an Account</a>-->
            <!--<router-link v-bind:to="'/account/register'" class="d-block small">Registrar conta</router-link>-->
            <router-link v-bind:to="'/account/login'" class="d-block small">Retornar</router-link>
            <!--<a class="d-block small" href="forgot-password.html">Forgot Password?</a>-->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'Forgot',
  components: {
    'PulseLoader': PulseLoader
  },

  data () {
    return {
      loading: false,
      error: null,
      color: '#ffffff',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px',
      size: '12px',
      data: ''
    }
  },
  methods: {
    sendData () {
      this.loading = true
      // GET request
      this.$http({url: 'https://jsonplaceholder.typicode.com/photos', method: 'GET'}).then(
        function (response) {
          // success callback
          console.log(response)
          this.data = response
          this.loading = false
        }.bind(this),
        function (response) {
          // error callback
          this.error = 'Erro no servidor'
          console.log(response)
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
  .loader-spinner{
    position: fixed;
    left: 48.7%;
    z-index: 1000;
    top:4%;
  }
</style>
