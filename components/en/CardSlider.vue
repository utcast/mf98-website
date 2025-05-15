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
      <SwiperSlide
        v-for="(card, index) in cards"
        :key="index"
        class="slide"
      >
      <NuxtLink :to="card.to" class="card-link" :style="{ backgroundImage: `url(${card.image})` }" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// カードデータ
const cards = [
  { to: '/en/museum/pen', image: new URL('@/assets/img/pen_logo.png', import.meta.url).href },
  { to: '/en/museum/clothes', image: new URL('@/assets/img/clothes_logo.png', import.meta.url).href },
  { to: '/en/museum/heat', image: new URL('@/assets/img/heat_logo.png', import.meta.url).href },
  { to: '/en/atelier/box', image: new URL('@/assets/img/box_logo.png', import.meta.url).href },
  { to: '/en/atelier/lightcop', image: new URL('@/assets/img/sangen_logo.png', import.meta.url).href },
  { to: '/en/atelier/pendulum', image: new URL('@/assets/img/huriko_logo.png', import.meta.url).href },
  { to: '/en/show/rotation', image: new URL('@/assets/img/rotation_logo.png', import.meta.url).href },
]
</script>

<style scoped>
.slider-container {
  width: 100%;
  padding: 50px 0;
}

.swiper-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 正方形カード */
.card-link {
  width: 300px;
  height: 300px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

/* 中央以外のスライドを小さく */
.swiper-slide:not(.swiper-slide-active) .card-link {
  transform: scale(0.8);
}

.card-link:hover {
  transform: scale(1.05);
}

/* スライド中のドット */
.swiper-container :deep(.swiper-pagination-bullet) {
  background: #90caf9;
}

.swiper-container :deep(.swiper-pagination-bullet-active) {
  background: #1976d2;
}
</style>
