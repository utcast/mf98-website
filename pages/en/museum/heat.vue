<template>
  <div>
    <MuseumNav>
      <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto border-l border-r border-b">
        <div class="flex justify-center items-center space-x-4 my-3">
          <img src="@/assets/img/heat_logo.png" alt="熱ブースロゴ" class="object-contain h-11" />
          <h1 class="text-4xl font-bold text-center">
            <T :v="`Thermal and Electric Booth`" />
          </h1>
        </div>
        <div class="card-container flex flex-col items-center w-5/6 mx-auto">
          <Card v-for="(card, index) in filteredCards" :key="index" :title_en="card.title_en" :content_en="card.content_en" :img="card.img" class="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-all mx-auto p-6" />
        </div>
      </div>
    </MuseumNav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMuseumStore } from '~/stores/museumStore';
import Card from '~/components/en/card.vue';
import MuseumNav from '~/components/en/museumNav.vue';
import T from '~/components/en/T.vue';

const museumStore = useMuseumStore();
const filteredCards = computed(() => museumStore.cards.filter(card => card.page === 'heat'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>