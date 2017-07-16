import axios from '@/http';
import router from '@/router'
export const login = async ({ commit }, data) => {
    const res = await axios.post('auth/login', data);
    if (res.status !== 200) {
        commit('setMsg', res.msg);
        return;
    }

    const { token } = res.data;
    commit('login', token);
    router.push({ name: 'Home' });
};