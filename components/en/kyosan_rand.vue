<script setup>
import { ref, onMounted } from 'vue'
import { useSponsors } from '~/composables/useSponsors'

const { sponsors } = useSponsors()

const selectedSponsor = ref(null)

// 重みに基づいてランダムに1つの協賛企業を選ぶ関数
const getRandomSponsor = () => {
  const totalWeight = sponsors.value.reduce((sum, sponsor) => sum + sponsor.weight, 0)
  let random = Math.random() * totalWeight
  for (const sponsor of sponsors.value) {
    if (random < sponsor.weight) {
      return sponsor
    }
    random -= sponsor.weight
  }
  return null
}

// 初期表示時にスポンサーを選ぶ
onMounted(() => {
  selectedSponsor.value = getRandomSponsor()
})
</script>

<template>
  <div class="sponsors">
    <div v-if="selectedSponsor" class="sponsor">
      <a :href="selectedSponsor.link" target="_blank" rel="noopener noreferrer">
        <img :src="selectedSponsor.image" :alt="selectedSponsor.name" class="sponsor-image" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.sponsors {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #D9EFFF; /* 背景色を追加 */
  padding: 1rem; /* パディングを追加 */
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