import axios from 'axios';

const BASE_URL = 'https://api.adsim.co/crm/api/v1/';

export const axiosApi = axios.create({
    baseURL: BASE_URL
});

axiosApi.defaults.headers.post['Content-Type'] = 'application/json';
axiosApi.defaults.headers.get['Content-Type'] = 'application/json';

axiosApi.interceptors.request.use(request => {
    return request;
}, error => {
    return error;
});

axiosApi.interceptors.response.use(response => {
    return response;
}, error => {
    return error;
});

export const getDataPromisse = async (url) => {
    return await axiosApi.get(url);
};