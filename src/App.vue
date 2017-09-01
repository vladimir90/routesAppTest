<template>
  <div id="app" class="container">
    <NavbarView></NavbarView>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
