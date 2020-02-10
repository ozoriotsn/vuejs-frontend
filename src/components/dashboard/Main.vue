<template>

  <div id="content" style="margin-top: 100px;">


    <div class="row">

      <div class="col-lg-12">

        <h1>Seja Bem Vindo(a)</h1>

      </div>
    </div>

    <!--<div class="col-lg-4 col-sm-6 col-xs-12">-->
      <!--<div class="main-box infographic-box">-->
        <!--<i class="fa fa-money grey"></i>-->
        <!--<span class="headline">Financeiro</span>-->
        <!--<span class="value"> <a href="/fluxocaixa">Caixa</a> </span>-->
      <!--</div>-->
    <!--</div>-->

  </div>

</template>

<script>

export default {
  name: 'Main',
  components: {  },
  data: function () {
    return {
      isToggled: false,
      isOpen: false
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style >

  .main-box {
    background: #FFF none repeat scroll 0% 0%;
    box-shadow: 1px 1px 2px 0px #CCC;
    margin-bottom: 16px;
    padding: 5px;
    border: 1px solid #ccc;
  }

  .infographic-box i {
    font-size: 2.9em;
    display: block;
    float: left;
    margin-right: 25px;
    margin-top: 5px;
    width: 40px;
    text-align: center;
  }

  .infographic-box .headline {
    display: block;
    font-size: 1.2em;
    font-weight: 300;
  }

  .infographic-box .value {
    font-size: 2.1em;
    font-weight: 600;
    margin-top: -5px;
    display: block;
  }

  .infographic-box i.grey {
    color: grey;
  }

</style>
