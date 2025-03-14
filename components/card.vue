<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    content: String,
  });
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    text-align: center;
  }
  </style>
  