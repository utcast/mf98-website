<template>
    <div>
      <img src="@/assets/img/loading_picture.png" alt="Loading...." class="object-contain h-11" />   
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  router.replace({ name: 'en-kimiS-1_1' });
  </script>