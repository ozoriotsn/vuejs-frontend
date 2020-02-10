<template>

  <div>

    <!-- Sidebar -->
    <ul class="sidebar navbar-nav d-print-none">


      <li class="nav-item">
        <router-link v-bind:to="'/dashboard/products'" class="nav-link" ><i class="fa fa-barcode"></i> <span>Produtos</span></router-link>
      </li>

      <li class="nav-item">
        <router-link v-bind:to="'/dashboard/categories'" class="nav-link" ><i class="fa fa-cubes"></i> <span>Categorias</span></router-link>
      </li>

    </ul>

  </div>

</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      active: true,
      hasError: false,
      isToggled: false,
      isOpen: true
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    handleClick: function () {
      this.$emit('clickedSomething')
    }
  },
  mounted () {
    this.$parent.$on('toggleNav', () => {
      console.log('received')
      this.active = !this.active
    })
  }
}

</script>

<style>

  html, body {
    height: 100%;
  }

  .sidebar {
    padding-top: 80px;
    background: #171a1d !important;
    min-height: 100% !important;
    position: fixed !important;
    top: 0;
    bottom: 0;
    z-index: 1000;

  }

  .wrapper {
    height: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .row-offcanvas {
    position: relative;
    margin-left: 0;
    margin-right: 0;
    height: 100%;
  }

  #sidebar {
    background-color: #eee;
    min-height: 100%;
    padding: 15px;
    overflow: hidden;
    -webkit-transition: width 0.3s ease-in;
    -moz-transition: width 0.3s ease-in;
    transition: width 0.3s ease-in;
    z-index: 1;
  }

  #sidebar span.collapse.in {
    display: inline;
  }

  #sidebar .nav .nav-item .nav-link {
    white-space: nowrap;
    overflow: hidden;
  }

  #main {
    padding: 15px;
    left: 0;
  }

  /*
   * off canvas sidebar
   * --------------------------------------------------
   */
  @media screen and (max-width: 34em) {
    #sidebar {
      min-width: 43px;
      -webkit-transition: all 0.4s ease-in-out;
      -moz-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    #main {
      wdth: 60%;
    }

    .row-offcanvas-left.active .sidebar-offcanvas span.collapse {
      display: inline !important;
    }

    .row-offcanvas-left.active {
      left: 40%;
    }

    .row-offcanvas-left.active .sidebar-offcanvas {
      left: -40%;
      position: absolute;
      top: 0;
      width: 40%;
    }

    .row-offcanvas-left.active #main {
      width: 60%;
    }

    /* sidebar link text always visible when active */
    .row-offcanvas-left.active .sidebar-offcanvas span.collapse.in {
      display: inline !important;
    }

  }

  @media screen and (min-width: 34em) {
    .row-offcanvas-left.active {
      left: 43px;
      width: 97%;
      width: calc(100% - 43px);
    }

    .row-offcanvas-left.active .sidebar-offcanvas {
      left: -43px;
      position: absolute;
      top: 0;
      width: 43px;
      text-align: center;
      min-width: 43px;
    }

  }

  .navbar {
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #666;
    margin: 40px 0;
  }

  /* ---------------------------------------------------
      SIDEBAR STYLE
  ----------------------------------------------------- */
  #sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #333;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #333;
  }

  #sidebar ul.components {
    padding: 20px 0;

  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li {
    border-bottom: 1px solid #666;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
    color: #fff;
    text-decoration: none;
  }

  #sidebar ul li a:hover {
    color: #fff;
    background: #666;
  }

  #sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #666;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  /*a[aria-expanded="false"]::before, a[aria-expanded="true"]::before {*/
    /*content: '\e259';*/
    /*display: block;*/
    /*position: absolute;*/
    /*right: 20px;*/
    /*font-family: 'Glyphicons Halflings';*/
    /*font-size: 0.6em;*/
  /*}*/

  a[aria-expanded="true"]::before {
    content: '\e260';
  }

  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  a.download {
    background: #fff;
    color: #fff;
  }

  a.article, a.article:hover {
    background: #666 !important;
    color: #fff !important;
  }

  /* ---------------------------------------------------
      CONTENT STYLE
  ----------------------------------------------------- */
  #content {
    width: calc(100% - 250px);
    padding: 40px;
    min-height: 100vh;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    right: 0;
  }

  #content.active {
    width: 100%;
  }

  /* ---------------------------------------------------
      MEDIAQUERIES
  ----------------------------------------------------- */
  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }

    #sidebar.active {
      margin-left: 0;
    }

    #content {
      width: 100%;
    }

    #content.active {
      width: calc(100% - 250px);
    }

    #sidebarCollapse span {
      display: none;
    }
  }

</style>
