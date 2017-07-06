// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import { sync } from 'vuex-router-sync'

axios.defaults.baseURL='/api/';
Vue.router = router;
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(VueAuth, {
  auth: {
    request: function (req, token) {
      // this.options.http._setHeaders.call(this, req, { Authorization: 'Bearer ' + token })
    },
    response: function (res) {
      // Get Token from response body
      return res.data
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  fetchData: { url: 'designer/list', method: 'GET', enabled: true },
  refreshData: { enabled: false },
});


Vue.config.productionTip = true
Vue.config.devtools = true
const store = new Vuex.Store({})
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
