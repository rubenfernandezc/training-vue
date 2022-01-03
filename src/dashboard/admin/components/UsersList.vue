<template>
  <div>
  User List
  <div v-if="users.isLoading">Cargando</div>
    <ul v-for="item in users.data" :key="item.id">
      <li>{{item.id}} - {{item.first_name}} {{item.last_name}}</li>
    </ul>
  </div>
</template>

<script setup>
import {
  inject,
  onBeforeMount,
  reactive,
  defineExpose,
} from 'vue';

const apiCalls = inject('apiCalls');

const users = reactive({
  data: null,
  isLoading: false,
});

onBeforeMount(() => {
  apiCalls.get('/users').then((response) => {
    console.log(response.data);
    users.data = response.data.data;
  }).catch((error) => {
    console.log(error);
  });
});

const addUser = (user) => {
  console.log('addUser', user);
  users.data.push(user);
};

defineExpose({
  addUser,
});

</script>

<style scoped lang="scss">

</style>
