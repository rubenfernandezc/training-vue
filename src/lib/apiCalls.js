import * as axios from 'axios';
import store from '@/store';
import router from '@/router';

const instance = axios.create({
  baseURL: 'http://localhost:8001',
});

instance.defaults.headers.common['Content-Type'] = 'application/json';

// instance.defaults.headers.common['Authorization'] = `Bearer <${token}>`;

instance.interceptors.request.use((config) => {
  const Config = config;
  const { token } = store.login.data;
  console.log(token);
  if (token) {
    Config.headers.Authorization = `Bearer ${token}`;
    Config.headers['Content-Type'] = 'application/json';
  } else {
    // Do something... Usually logout user.
  }
  return Config;
});

instance.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    sessionStorage.removeItem('DATA');
    router.push('/login');
  }
  return Promise.reject(error);
});

export default instance;
