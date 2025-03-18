<!-- components/CardSlider.vue -->
<template>
  <div class="slider-container">
    <Swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="1.5"
      :space-between="30"
      :centered-slides="true"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      class="swiper-container"
    >
      <SwiperSlide v-for="(card, index) in cards" :key="index">
        <NuxtLink :to="card.to" class="card-link" :style="{ backgroundColor: card.color }">
          <p class="card-title">{{ card.title }}</p>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cards = [
  { to: '/museum/pen', color: '#1B682B', title: '文房具ブース' },
  { to: '/museum/close', color: '#952D87', title: '服ブース' },
  { to: '/museum/heat', color: '#E56A27', title: '熱ブース' },
]
</script>

<style scoped>
.slider-container {
  width: 100%;
  padding: 50px 0;
}

.card-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.card-link:hover {
  transform: scale(1.05);
}

.swiper-container :deep(.swiper-pagination-bullet) {
  background: #90caf9;
}

.swiper-container :deep(.swiper-pagination-bullet-active) {
  background: #1976d2;
}
</style>
