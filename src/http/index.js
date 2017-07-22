import axios from 'axios';

axios.defaults.baseURL = '/api/vueAuth/';
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status < 500;
};

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return { data: response.data, status: response.status }
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axios;
