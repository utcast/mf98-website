<template>
  <div>
    <ShowNav />
    <h1>回転ショー</h1>
    <div class="card-container">
      <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useShowStore } from '~/stores/showStore';
import Card from '~/components/card.vue';
import ShowNav from '~/components/showNav.vue';

const showStore = useShowStore();
const filteredCards = computed(() => showStore.cards.filter(card => card.page === 'rotation'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>
