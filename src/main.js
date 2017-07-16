import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import store from '@/store'
import { sync } from 'vuex-router-sync'

Vue.router = router;
Vue.use(Vuex);

Vue.config.productionTip = true
Vue.config.devtools = true
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
