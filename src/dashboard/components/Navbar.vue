<template>
  <div>
    <router-link to="/">Wellcome</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/admin" v-if="store.login.data.data.role === 'admin'">Admin</router-link>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const store = inject('store');
</script>

<style scoped lang="scss">
  a {
    padding: 3rem;
  }
</style>
