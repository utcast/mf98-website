<template>
  <div>
    <AtelierNav />
    <h1>念力振り子</h1>
    <div class="card-container">
      <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAtelierStore } from '~/stores/atelierStore';
import Card from '~/components/card.vue';
import AtelierNav from '~/components/atelierNav.vue';

const atelierStore = useAtelierStore();
const filteredCards = computed(() => atelierStore.cards.filter(card => card.page === 'pendulum'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>
