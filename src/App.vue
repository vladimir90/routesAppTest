<template>
  <div id="app" class="container is-fluid">
    <NavbarView></NavbarView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>

  import FooterView from './Components/Main/footer';
  import NavbarView from './Components/Main/navbar';
  import RoutesInputView from './Components/Main/routesInput';

export default {
  name: 'app',
  components:{
    NavbarView,
    FooterView,
    RoutesInputView
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
