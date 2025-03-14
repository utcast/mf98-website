<template>
  <div>
    <h1>rotation</h1>
    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :title="card.title" :content="card.content" />
    </div>
  </div>
</template>

<script setup>
import { useShowStore } from '~/stores/showStore';
import Card from '~/components/card.vue';

const showStore = useShowStore();
const cards = showStore.cards;
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>
