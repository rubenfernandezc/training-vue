<template>
  <div>
    Add User
    <form @submit.prevent="handleSubmit">
      <TestInput v-model="form.data.firstName">First Name</TestInput>
      <TestInput v-model="form.data.lastName">Last Name</TestInput>
      <TestInput v-model="form.data.email">Email</TestInput>
      <input type="submit" value="Add"/>
    </form>
    <div v-if="form.isError">Usuario/contraseña incorrectos</div>
    <TestModal ref="refTestModal" />
  </div>
</template>

<script setup>
import {
  reactive,
  ref,
  inject,
  defineEmits,
} from 'vue';
import TestInput from '@/components/TestInput.vue';
import TestModal from '@/components/TestModal.vue';

const apiCalls = inject('apiCalls');

const refTestModal = ref(null);

const form = reactive({
  data: {
    firstName: null,
    lastName: null,
    email: null,
  },
  isError: false,
});

const emit = defineEmits(['sendUser']);

const handleSubmit = () => {
  console.log('handleSubmit');
  apiCalls.post('/users', {
    first_name: form.data.firstName,
    last_name: form.data.lastName,
    email: form.data.email,
  }).then((response) => {
    console.log('response', response.data);
    emit('sendUser', response.data.data);
    refTestModal.value.openModal('Usuario Añadido', `User ${response.data.data.first_name} ${response.data.data.last_name} added`);
  }).catch((error) => {
    console.log('error', error);
    form.isError = error.response.data;
  });
};

</script>

<style scoped lang="scss">

</style>
