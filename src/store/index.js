import { reactive } from 'vue';
import login from './login';
import cars from './cars';

const store = reactive({
  login,
  cars,
});

export default store;
