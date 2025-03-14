<template>
  <div>
    <h1>close</h1>
    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :title="card.title" :content="card.content" />
    </div>
  </div>
</template>

<script setup>
import { useMuseumStore } from '~/stores/museumStore';
import Card from '~/components/card.vue';

const museumStore = useMuseumStore();
const cards = museumStore.cards;
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>