<template>
  <body class="bg-dark1">
    <cc-header></cc-header>

    <div class="container">
      <main class="catalog">
        <router-view></router-view>
        <!--<h1 class="small">LAYOUT LOGIN</h1>-->

      </main>
    </div>

    <!-- <cc-footer></cc-footer> -->
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
@import "../../assets/css/sb-admin.css";
@import "https://bootswatch.com/4/materia/bootstrap.min.css";

v-cloak { display: none }

  body .bg-dark1{
    background: #343a40;
    min-height: 898px;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    padding-top: 5%;
  }

  .catalog{
    margin-top: 100px;
  }
</style>
