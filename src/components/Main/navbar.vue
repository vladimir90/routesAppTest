<template>
  <nav class="navbar ">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../../../src/assets/images/route.png" alt="">
      </a>

      <a class="navbar-item is-hidden-desktop" href="#" target="_blank">
      <span class="icon" style="color: #333;">
        <i class="fa fa-github"></i>
      </span>
      </a>


      <div class="navbar-burger burger" data-target="navMenubd-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenubd-example" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link  is-active" to="/">
            Home
          </router-link>
          <div class="navbar-dropdown ">
            <a class="navbar-item is-active" href="#">
              About
            </a>
          </div>
        </div>

      </div>

      <div class="navbar-end">

      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return{}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
