<template>
 <Navbar></Navbar>
 <div id="nav">
    Dashboard
  </div>
  <router-view/>
</template>

<script setup>
import Navbar from '@/dashboard/components/Navbar.vue';
</script>
