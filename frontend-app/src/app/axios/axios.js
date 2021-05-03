import axios from "axios";

const instance = axios.create({
    headers:{
        'Content-Type':'application/json'
    }
})

export const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

instance.interceptors.request.use( config => {
    const token = localStorage.getItem('token');
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';
    return config;
})

export default instance;


