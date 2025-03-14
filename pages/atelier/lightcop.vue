<template>
  <div>
    <h1>lightcop</h1>
    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :title="card.title" :content="card.content" />
    </div>
  </div>
</template>

<script setup>
import { useLiveStore } from '~/stores/liveStore';
import Card from '~/components/Card.vue';

const liveStore = useLiveStore();
const cards = liveStore.cards;
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>
