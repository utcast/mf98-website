<template>
  <div>
    <AtelierNav>
      <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto ">
        <div class="flex justify-center item-center space-x-4 my-3">
          <img src="@/assets/img/box_logo.png" alt="光の箱ロゴ" class="object-contain h-11" />
          <h1 class="text-4xl font-bold text-center">光の箱</h1>
        </div>
        <div class="card-container flex flex-col items-center w-5/6 mx-auto">
          <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" />
        </div>
        <small>光の箱は松村泰三さんが考案した工作です。</small>
      </div>
    </AtelierNav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAtelierStore } from '~/stores/atelierStore';
import Card from '~/components/card.vue';
import AtelierNav from '~/components/atelierNav.vue';

const atelierStore = useAtelierStore();
const filteredCards = computed(() => atelierStore.cards.filter(card => card.page === 'box'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>
