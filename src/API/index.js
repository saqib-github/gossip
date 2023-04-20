// auth api's
import axios from 'axios';
import Cookies from 'js-cookie';
import { showError, showSucess } from '../utils/utils';

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

// Add a response interceptor
API.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (response.config.method === 'post' && response.status === 200) {
            showSucess(response?.data?.message);
        }
        return response;
    },
    function (error) {
        showError(error?.response?.data?.error);
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export const post = (url, data, headers) => API.post(url, data, { headers: { ...headers, accept: 'application/json', Authorization: `Bearer ${Cookies.get('token')}` || '' } });
export const get = (url, params, headers) =>
    API.get(params ? url + params : url, {
        headers: { ...headers, accept: 'application/json', Authorization: `Bearer ${Cookies.get('token')}` || '' }
    });

export const remove = (url, params, headers) =>
    API.delete(params ? url + params : url, {
        headers: { ...headers, accept: 'application/json' }
    });
