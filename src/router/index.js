import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Login from '@/pages/login'
import home from '@/pages/home'
import Forbidden from '@/pages/403'
import NotFound from '@/pages/404'

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
      meta: { auth: true },
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
