<template>
  <div>
    List
    <button @click="changeTab(1)">Properties</button>
    <button @click="changeTab(2)">Cars</button>
    <div v-if="tab === 1">
      <div v-if="properties.isLoading">Cargando</div>
      <ul v-for="item in properties.data" :key="item.id">
        <li>{{item.property_name}} - {{item.city}}</li>
      </ul>
    </div>
    <div v-if="tab === 2">
      <div v-if="store.cars.isLoading">Cargando</div>
      <ul v-for="item in store.cars.data" :key="item.id">
        <li @click="goToCar(item.id)">
          {{item.car_model}} - {{item.car_make}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  inject,
  reactive,
  ref,
  onBeforeMount,
} from 'vue';

import { useRouter } from 'vue-router';

const apiCalls = inject('apiCalls');

const store = inject('store');

const router = useRouter();

const tab = ref(1);

const properties = reactive({
  data: null,
  isLoading: false,
});

// const cars = reactive({
//   data: null,
//   isLoading: false,
// });

onBeforeMount(() => {
  apiCalls.get('/properties').then((response) => {
    console.log(response.data);
    properties.data = response.data.data;
  }).catch((error) => {
    console.log(error);
  });
  apiCalls.get('/cars').then((response) => {
    console.log(response.data);
    store.cars.data = response.data.data;
  }).catch((error) => {
    console.log(error);
  });
});

const changeTab = (num) => {
  tab.value = num;
};

const goToCar = (id) => {
  router.push(`/car/${id}`);
};

</script>

<style scoped lang="scss">

</style>
