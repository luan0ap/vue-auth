import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login'
import home from '@/components/home'
import Forbidden from '@/components/403'
import NotFound from '@/components/404'
// import menuModule from 'vuex-store/modules/menu'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      meta: { auth: 'admin' },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/403',
      name: '403',
      component: Forbidden,
    }
  ]
})
