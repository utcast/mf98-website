<template>
  <div>
    <MuseumNav />
    <div class="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md mx-auto">
      <h1 class="text-3xl font-bold text-center my-6">熱ブース</h1>
        <div class="card-container mx-auto">
          <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" class= "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-all mx-auto p-6" />
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMuseumStore } from '~/stores/museumStore';
import Card from '~/components/card.vue';
import MuseumNav from '~/components/museumNav.vue';

const museumStore = useMuseumStore();
const filteredCards = computed(() => museumStore.cards.filter(card => card.page === 'heat'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>