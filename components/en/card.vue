<template>
  <div class="card">
    <h1 class="font-bold border-b"><T :v="title_en" /></h1>
    <img :src="img" :alt="alt" class="card-image" />
    <p><T :v="content_en" /></p>
  </div>
</template>

<script setup>
import T from '~/components/T.vue';

defineProps({
  title_en: String,
  content_en: String,
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
h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.card-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  justify-content: center;
}
</style>
