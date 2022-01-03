<template>
  <div>
    Admin
    <AddUser @sendUser="receiveUser" />
    <UsersList ref="refUserList" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UsersList from '@/dashboard/admin/components/UsersList.vue';
import AddUser from '@/dashboard/admin/components/AddUser.vue';

const refUserList = ref(null);

const receiveUser = (user) => {
  console.log('receiveUser', user);
  refUserList.value.addUser(user);
};

</script>

<style scoped lang="scss">

</style>
