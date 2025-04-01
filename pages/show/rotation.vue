<template>
  <div>
    <ShowNav>
    <div class="tab_museum w-4/5 bg-gray-50 p-6 rounded-lg shadow-md mx-auto">
      <div class="flex justify-center item-center space-x-4 my-3">
        <img src="@/assets/img/rotation_logo.png" alt="回転ショーロゴ" class="object-contain h-11" />
        <h1 class="text-4xl font-bold text-center">回転ショー</h1>
      </div>
      <div class="card-container flex flex-col items-center w-5/6 mx-auto">
            <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" class= "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-all mx-auto p-6" />
      </div>
    </div>
    </ShowNav>
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
