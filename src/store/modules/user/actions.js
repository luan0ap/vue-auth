import axios from '@/http';
import router from '@/router';
import { setItem, getItem } from '@/storage';
export const login = async ({ commit }, data) => {
    const res = await axios.post('auth/login', data);
    if (res.status !== 200) {
        commit('setMsg', res.data.msg);
        return;
    }

    commit('setMsg', '');
    const { token, _id } = res.data;
    setItem('token', token);
    setItem('user_id', _id);
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

export const logout = async ({ commit }) => {
    router.push({ name: 'Login' });
    localStorage.clear();
    commit('fetchUserData', {});
    const res = await axios.post('auth/logout');
};

export const fetchUserData = async ({ commit }) => {
    const id = getItem('user_id');
    const token = getItem('token');
    if (!id || !token) {
        router.push({ name: 'Login' });
        return;
    }
    const res = await axios.get(`users/${id}`, { headers: { token } });
    if (res.status !== 200) {
        commit('setMsg', res.data.msg);
        return;
    }

    commit('setMsg', '');
    commit('fetchUserData', res.data);
};
