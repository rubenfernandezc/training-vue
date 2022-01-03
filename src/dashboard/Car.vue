<template>
  <div>
    Car:
    {{route.params.carid}}
    <br>
    {{car.data}}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { inject, reactive, onBeforeMount } from 'vue';

const apiCalls = inject('apiCalls');

// const store = inject('store');

const car = reactive({
  data: null,
  isLoading: false,
});

const route = useRoute();

// const props = defineProps({
//   item: { type: Object, required: true },
// });

onBeforeMount(() => {
  apiCalls.get(`/car/${route.params.carid}`).then((response) => {
    console.log(response.data.data);
    car.data = response.data.data;
  }).catch((error) => {
    console.log(error);
  });
});

</script>

<style scoped lang="scss">

</style>
