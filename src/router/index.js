import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/landingPage'
import RouteDetailsPage from '@/components/routesDetailsPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: LandingPage
    },
    {
      path:'/details/:dest',
      name:'details',
      component:RouteDetailsPage
    }
  ]
})
