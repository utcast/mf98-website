<template>
  <div class="card">
    <h2><T :v="title" /></h2>
    <img :src="img" :alt="alt" class="card-image" />
    <p><T :v="content" /></p>
  </div>
</template>

<script setup>
import T from '~/components/T.vue';

defineProps({
  title: String,
  content: String,
  img: String,
  alt: String,
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 100%;
}

.card-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  justify-content: center;
}
</style>
