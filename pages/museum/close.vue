<template>
  <div>
    <MuseumNav />
    <h1>服ブース</h1>
    <div class="card-container">
      <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMuseumStore } from '~/stores/museumStore';
import Card from '~/components/card.vue';
import MuseumNav from '~/components/museumNav.vue';

const museumStore = useMuseumStore();
const filteredCards = computed(() => museumStore.cards.filter(card => card.page === 'close'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>