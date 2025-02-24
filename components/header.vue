<script setup>
import { ref } from 'vue'

const rubyVisible = ref(true)
const menuOpen = ref(false)

const toggleFurigana = () => {
  rubyVisible.value = !rubyVisible.value
  const rubyElements = document.querySelectorAll('ruby rt')
  rubyElements.forEach(rt => {
    if (rubyVisible.value) {
      rt.textContent = rt.dataset.original
    } else {
      rt.dataset.original = rt.textContent
      rt.textContent = ''
    }
  })
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="flex flex-col items-center p-4 bg-blue-600 w-full">
    <div class="flex justify-between items-center w-full max-w-5xl">
      <div class="text-white text-lg text-center flex-grow">
        <ruby>東大 <rt>とうだい</rt></ruby> <ruby>CAST <rt>きゃすと</rt></ruby> <ruby>五月祭 <rt>ごがつさい</rt></ruby>2025
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="text-white text-xs">ふりがな</div>
        <div class="py-1 px-2 rounded cursor-pointer bg-blue-700 text-white" :class="{ 'bg-white text-blue-700': rubyVisible }" @click="toggleFurigana(true)">あり</div>
        <div class="py-1 px-2 rounded cursor-pointer bg-blue-700 text-white" :class="{ 'bg-white text-blue-700': !rubyVisible }" @click="toggleFurigana(false)">なし</div>
      </div>
      <div class="flex flex-col cursor-pointer md:hidden" @click="toggleMenu">
        <span class="bg-white h-0.5 w-6 my-1"></span>
        <span class="bg-white h-0.5 w-6 my-1"></span>
        <span class="bg-white h-0.5 w-6 my-1"></span>
      </div>
    </div>
    <nav :class="{ 'max-h-0': !menuOpen, 'max-h-96': menuOpen }" class="flex-col items-center w-full bg-blue-600 transition-all duration-500 ease-in-out overflow-hidden md:flex md:flex-row md:justify-center md:max-h-full">
      <ul class="flex flex-col md:flex-row list-none p-0">
        <li class="my-2 md:my-0 md:mx-4"><nuxt-link to="/" class="text-white no-underline">ホーム</nuxt-link></li>
        <li class="my-2 md:my-0 md:mx-4"><nuxt-link to="/museum" class="text-white no-underline">ミュージアム</nuxt-link></li>
        <li class="my-2 md:my-0 md:mx-4"><nuxt-link to="/show" class="text-white no-underline">ショー</nuxt-link></li>
        <li class="my-2 md:my-0 md:mx-4"><nuxt-link to="/atelier" class="text-white no-underline">アトリエ</nuxt-link></li>
        <li class="my-2 md:my-0 md:mx-4"><nuxt-link to="/time" class="text-white no-underline">タイムスケジュール</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  background-color: #3490dc; /* ページ全体の背景色 */
  height: 100%;
}

@media (max-width: 768px) {
  nav {
    max-height: 0;
  }

  nav.flex {
    max-height: 500px; /* メニューの最大高さを設定 */
  }
}
</style>

