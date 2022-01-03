<template>
  <div>
    <slot>Prueba</slot>
    <input :type="props.type" @input="emit('update:modelValue', inputData)" v-model="inputData" />
  </div>
</template>

<script setup>

import { ref, defineEmits, defineProps } from 'vue';

const inputData = ref(null);

const emit = defineEmits(['update:modelValue']);
// evento específico para actualizar el v-model del padre

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
});

</script>

<style scoped lang="scss">

</style>
