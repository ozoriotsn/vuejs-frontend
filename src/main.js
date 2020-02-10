// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import money from 'v-money'

Vue.use(money, {precision: 4})
Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(require('vue-script2'))
Vue.use(VueResource)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'

})
