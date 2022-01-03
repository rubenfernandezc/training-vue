import { reactive } from '@vue/composition-api';
<template>
  <div class="home">
    Login
    <form @submit.prevent="handleSubmit">
      <TestInput v-model="form.data.user">Usuario</TestInput>
      <TestInput v-model="form.data.password" type="password">Contraseña</TestInput>
      <input type="submit" value="Login"/>
    </form>
    <div v-if="form.isError">Usuario/contraseña incorrectos</div>
    {{form.data.user}}
  </div>
</template>

<script setup>

import { reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

import TestInput from '@/components/TestInput.vue';

const apiCalls = inject('apiCalls');
const store = inject('store');

const router = useRouter();

const form = reactive({
  data: {
    user: 'user@test.com',
    password: 'password',
  },
  isError: false,
});

const handleSubmit = () => {
  console.log('handleSubmit');
  apiCalls.post('/login', {
    email: form.data.user,
    password: form.data.password,
  }).then((response) => {
    console.log('response', response.data);
    console.log('store', store);
    store.login.data.data = response.data.data;
    store.login.data.token = response.data.token;
    sessionStorage.setItem('DATA', JSON.stringify(response.data));
    router.push('/');
  }).catch((error) => {
    console.log('error', error);
    form.isError = true;
  });
};

</script>

<docs>
  "email": "user@test.com",
  "password": "password"
</docs>
