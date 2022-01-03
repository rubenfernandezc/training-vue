<template>
<div class="test">
  Test
</div>
  <router-view/>
</template>

<script setup>

import { provide, onBeforeMount } from 'vue';
import apiCalls from '@/lib/apiCalls';
import store from '@/store';

provide('apiCalls', apiCalls);
provide('store', store);

onBeforeMount(() => {
  const userData = JSON.parse(sessionStorage.getItem('DATA'));
  if (!store.login.data.data) {
    store.login.data.data = userData.data;
  }
  if (!store.login.data.token) {
    store.login.data.token = userData.token;
  }
});

</script>

<style lang="scss">
body, html {
  font-size: 10px;
}
*, *:before, *:after {
box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
.test {
  padding: 2rem;
}
</style>
