<template>
  <div>

    <pulse-loader :loading="loading" :color="color" :size="size" class="loader-spinner"></pulse-loader>

    <div class="container-login">
      <router-view/>
    </div>

    <div class="container">

      <div class="card card-login mx-auto mt-5">

        <div v-if="error" class="error">
          <div class="alert alert-warning text-center"> {{ error }}</div>
        </div>

        <div class="text-center">

          <br>
          <div class="col-12"><img class="rounded-circle"
                                   src="../../assets/icon-cdcc6d6dcda827a694dce8bfa9a1ab41113b629ef1cc11f886866af9194c81d0.png"
                                   alt="Icon" height="130"></div>

        </div>

        <!--<div class="card-header">Login</div>-->
        <div class="card-body">
          <form v-on:submit="validateForm">
            <div class="form-group">
              <!--<label for="exampleInputEmail1">Email {{email}}</label>-->
              <input class="form-control" v-model="email" id="exampleInputEmail1" type="email"  aria-describedby="emailHelp" placeholder="seu@email.com.br" v-bind:class="{ 'is-invalid': attemptSubmit && missingName }">
              <div class="invalid-feedback">Este campo é de preenchimento obrigatorio.</div>

            </div>
            <div class="form-group">
              <!--<label for="exampleInputPassword1">Password {{password}}</label>-->
              <input class="form-control" v-model="password" id="exampleInputPassword1" type="password"   placeholder="************" v-bind:class="{ 'is-invalid': attemptSubmit && missingPassword }">
              <div class="invalid-feedback">Este campo é de preenchimento obrigatorio.</div>
            </div>
            <!--<div class="form-group">-->
            <!--<div class="form-check">-->
            <!--<label class="form-check-label">-->
            <!--<input class="form-check-input" type="checkbox"> Remember Password</label>-->
            <!--</div>-->
            <!--</div>-->
            <button class="btn btn-primary btn-block" v-on:click="login">Login</button>

          </form>
          <div class="row text-center">

            <div class="col-lg-12"><br></div>

            <!-- <div class="col-lg-6"> -->
              <!--<a class="d-block small mt-3" href="register.html">Register an Account</a>-->
              <!-- <router-link v-bind:to="'/account/register'" class="d-block small ">Registrar conta</router-link> -->
            <!-- </div> -->

           <div class="col-lg-12">

             <!--<router-link v-bind:to="'/account/forgot'" class="d-block small">Esqueceu a senha?</router-link>-->
             <!--<a class="d-block small" href="forgot-password.html">Forgot Password?</a>-->

           </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import authService from '../services/Auth'
export default {
  name: 'Login',
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
      data: '',
      email: '',
      password: '',
      attemptSubmit: false
    }
  },
  computed: {
    missingName: function () { return this.email === '' },
    missingPassword: function () { return this.password === '' },

    wrongNumber: function () {
      return (
        this.isNumeric(this.number) === false ||
        this.number < 1 ||
        this.number > 10
      )
    }
  },
  methods: {
    login () {
      var params = {
        email: this.email,
        password: this.password
      }

      this.loading = true

      authService
        .login(params)
        .then(response => {
          // console.log('LOGIN: ', response)
          this.data = response
          this.loading = false
          sessionStorage.setItem('token', response.data.success.token)
          this.$router.push('/dashboard')
        })
        .catch(error => {
          this.$swal('Aviso', 'Erro interno do servidor <br>' + error.response.data.error, 'warning')
          sessionStorage.clear()
          this.loading = false
        })
    },

    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },

    validateForm: function (event) {
      this.attemptSubmit = true
      if (this.missingName || this.wrongNumber) event.preventDefault()
    }
  }
}
</script>

<style scoped>
  .loader-spinner {
    position: fixed;
    left: 48.7%;
    z-index: 1000;
    top: 10%;
  }
</style>
