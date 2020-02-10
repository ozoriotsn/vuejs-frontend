<template>
  <body class="site">
  <cc-header></cc-header>

    <main class="catalog1">
      <router-view></router-view>
      <!--<h1 class="small">LAYOUT PAGE</h1>-->
    </main>

  <cc-footer></cc-footer>
  </body>

</template>

<script>
import ccHeader from '../common/cc-header.vue'
import ccFooter from '../common/cc-footer.vue'

export default {
  components: {
    ccHeader,
    ccFooter
  }

}
</script>

<script2 src="../../assets/vendor/jquery/jquery.min.js"></script2>
<script2 src="../../assets/vendor/bootstrap/js/bootstrap.min"></script2>
<script2 src="../../assets/vendor/jquery-easing/jquery.easing.min.js"></script2>

<style>
  @import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
  @import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
  @import "../../assets/css/landing-page.css";
  v-cloak { display: none }
  body{
    /*background: #343a40;*/
  }

  .catalog{
    margin-top: 100px;
  }
</style>
