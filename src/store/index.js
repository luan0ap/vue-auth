import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as actions from './actions';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        msg: ''
    },
    actions,
    mutations,
    modules: { user }
})