<script setup>
import { useSponsors } from '~/composables/useSponsors' // 協賛企業増えたらこの先のファイルいじってね

const { sponsors } = useSponsors()
</script>

<template>
  <div class="sponsors">
    <div v-for="sponsor in sponsors" :key="sponsor.name" class="sponsor">
      <a :href="sponsor.link" target="_blank" rel="noopener noreferrer">
        <img :src="sponsor.image" :alt="sponsor.name" class="sponsor-image" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
</style>