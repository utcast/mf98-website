<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const rubyVisible = ref(true)
const menuOpen = ref(false)
const router = useRouter()

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
    <div class="header-content flex justify-between items-center w-full max-w-screen-xl">
      <nuxt-link to="/" class="flex items-center">
        <img src="~/assets/img/CASTロゴ_透過.png" alt="CASTロゴ" class="h-12 mr-4">
      </nuxt-link>
      <div class="title text-white text-lg text-center flex-grow"> 
        <ruby>東大 <rt>とうだい</rt></ruby> 
        <ruby>CAST <rt>きゃすと</rt></ruby> 
        <ruby>五月祭 <rt>ごがつさい</rt></ruby>2025
      </div>
      <div class="toggle-buttons flex flex-col items-center gap-1">
        <div class="label text-white text-xs">ふりがな</div>
        <div class="toggle-button py-1 px-2 rounded cursor-pointer bg-blue-700 text-white" :class="{ 'bg-white text-blue-700': rubyVisible }" @click="toggleFurigana(true)">あり</div>
        <div class="toggle-button py-1 px-2 rounded cursor-pointer bg-blue-700 text-white" :class="{ 'bg-white text-blue-700': !rubyVisible }" @click="toggleFurigana(false)">なし</div>
      </div>
      <div class="menu-icon flex flex-col cursor-pointer md:hidden" @click="toggleMenu">
        <span class="bg-white h-0.5 w-6 my-1"></span>
        <span class="bg-white h-0.5 w-6 my-1"></span>
        <span class="bg-white h-0.5 w-6 my-1"></span>
      </div>
    </div>

    <!-- ハンバーガーメニューのナビゲーション -->
    <nav :class="{ 'hidden': !menuOpen, 'block': menuOpen }" class="w-full bg-blue-600 transition-all duration-300 ease-in-out md:hidden">
      <ul class="flex flex-col items-center py-4">
        <li class="my-2"><nuxt-link to="/" class="text-white no-underline">ホーム</nuxt-link></li>
        <li class="my-2"><nuxt-link to="/museum" class="text-white no-underline">ミュージアム</nuxt-link></li>
        <li class="my-2"><nuxt-link to="/show" class="text-white no-underline">ショー</nuxt-link></li>
        <li class="my-2"><nuxt-link to="/atelier" class="text-white no-underline">アトリエ</nuxt-link></li>
        <li class="my-2"><nuxt-link to="/schedule" class="text-white no-underline">スケジュール</nuxt-link></li>
        <li class="my-2"><nuxt-link to="/access" class="text-white no-underline">アクセス</nuxt-link></li>
      </ul>
    </nav>

    <!-- デスクトップ用のナビゲーション -->
    <div class="nav-links hidden md:flex justify-center gap-4 mt-4">
      <span><nuxt-link to="/" class="text-white no-underline">ホーム</nuxt-link></span>
      <span><nuxt-link to="/museum" class="text-white no-underline">ミュージアム</nuxt-link></span>
      <span><nuxt-link to="/show" class="text-white no-underline">ショー</nuxt-link></span>
      <span><nuxt-link to="/atelier" class="text-white no-underline">アトリエ</nuxt-link></span>
      <span><nuxt-link to="/schedule" class="text-white no-underline">スケジュール</nuxt-link></span>
      <span><nuxt-link to="/access" class="text-white no-underline">アクセス</nuxt-link></span>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 768px) {
  .menu-icon {
    @apply flex;
  }
}
</style>
