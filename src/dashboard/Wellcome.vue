<template>
  <div>
    Wellcome
    {{ store.login.data.data.name }}
    with the rol
    {{ store.login.data.data.role }}
  </div>
</template>

<script setup>
import { inject } from 'vue';

const store = inject('store');

</script>

<style scoped lang="scss">

</style>
