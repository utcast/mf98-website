<template>
  <div>
    <h1>lightcop</h1>
    <div class="card-container">
      <Card v-for="(card, index) in cards" :key="index" :title="card.title" :content="card.content" />
    </div>
  </div>
</template>

<script setup>
import { useAtelierStore } from '~/stores/atelierStore';
import Card from '~/components/card.vue';

const atlierStore = useAtelierStore();
const cards = atlierStore.cards;
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>
