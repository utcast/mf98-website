<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="img" :alt="title" class="card-image" />
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
  img: String,
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
}

.card-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
