<template>
  <div v-if="isOpen">
    <h2>{{dataModal.title}}</h2>
    <p>{{dataModal.text}}</p>
    <button @click="closeModal">Ok</button>
  </div>
</template>

<script setup>
import { ref, reactive, defineExpose } from 'vue';

const isOpen = ref(false);

const dataModal = reactive({
  title: null,
  text: null,
});

const openModal = (title, text) => {
  dataModal.title = title;
  dataModal.text = text;
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

defineExpose({
  openModal,
});

</script>

<style scoped lang="scss">

</style>
