<script setup>
import { useSponsors } from '~/composables/useSponsors' // 協賛企業増えたらこの先のファイルいじってね
import TitleTriangle from '~/components/TitleTriangle.vue'

const { sponsors } = useSponsors()
</script>

<template>
  <div class="sponsors-wrapper">
    <div class="sponsors">
        <div v-for="sponsor in sponsors" :key="sponsor.name" class="sponsor">
          <a :href="sponsor.link" target="_blank" rel="noopener noreferrer">
          <img :src="sponsor.image" :alt="sponsor.name" class="sponsor-image" />
          </a>
        </div>
    </div>
    <TitleTriangle title="ご協賛企業様" position="right" />
  </div>
</template>

<style scoped>
.sponsors-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end; /* 右に揃える */
  background-color: #D9EFFF; /* 背景色を追加 */
  padding: 1rem; /* パディングを追加 */
}

.sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white; /* 背景色を追加 */
  padding: 1rem; /* パディングを追加 */
  position: absolute;
  z-index: 1; /* 重なり順を調整 */
  width: 80%; /* デバイスの幅に対して80% */
  margin-left: 10%; /* 中央揃え */
  margin-right: 10%; /* 中央揃え */
  margin-top: 50px; /* 少し下にずらす */
  border-radius: 20px; /* 角を丸くする */
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

.title-triangle {
  position: absolute;
  top: -1.5rem; /* 少し上に配置 */
  right: 0;
  z-index: 2; /* sponsors の上に表示 */
}
</style>