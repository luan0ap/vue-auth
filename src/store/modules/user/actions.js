import axios from '@/http';
import router from '@/router'
export const login = async ({ commit }, data) => {
    const res = await axios.post('auth/login', data);
    if (res.status !== 200) {
        commit('setMsg', res.data.msg);
        return;
    }
    
    commit('setMsg', '');
    const { token } = res.data;
    commit('login', token);
    router.push({ name: 'Home' });
};

export const logup = async ({ commit }, data) => {
    const res = await axios.post('users', data);
    if (res.status !== 200) {
        commit('setMsg', res.data.msg);
        return;
    }
    
    commit('setMsg', '');
    router.push({ name: 'Login' });
};