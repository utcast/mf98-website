<script setup>
import { ref } from 'vue'

const sponsors = ref([
  {
    name: '企業A',
    image: 'path/to/imageA.jpg',
    link: 'https://www.companyA.com'
  },
  {
    name: '企業B',
    image: 'path/to/imageB.jpg',
    link: 'https://www.companyB.com'
  },
  {
    name: '企業C',
    image: 'path/to/imageC.jpg',
    link: 'https://www.companyC.com'
  }
  // 他の企業データもここに追加
])
</script>

<template>
  <div class="sponsors">
    <div v-for="sponsor in sponsors" :key="sponsor.name" class="sponsor">
      <a :href="sponsor.link" target="_blank" rel="noopener noreferrer">
        <img :src="sponsor.image" :alt="sponsor.name" class="sponsor-image" />
        <p class="sponsor-name">{{ sponsor.name }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.sponsor {
  text-align: center;
}

.sponsor-image {
  max-width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.sponsor-name {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
}
</style>