<template>
    <div>aa</div>
  </template>
  
  <script>
  export default {
    beforeRouteEnter(to, from, next) {
      next({ name: 'box.vue' });
    },
  };
  </script>