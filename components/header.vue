<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const rubyVisible = ref(true)
const menuOpen = ref(false)
const router = useRouter()
const route = useRoute()

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

// computed: 現在のURLから先頭の "/en" を削除して日本語版のパスを作成
const japanesePath = computed(() => {
  if (route.path.startsWith('/en')) {
    return route.path.replace(/^\/en/, '') || '/'
  }
  return route.path
})
</script>

<template>
  <header class="flex flex-col items-center p-4" style="background-color: #0168B7; width: 100%;">
    <div class="header-content flex justify-between items-center w-full max-w-screen-xl">
      <nuxt-link to="/" class="flex items-center">
        <img src="~/assets/img/CASTロゴ_透過.png" alt="CASTロゴ" class="h-12 mr-4">
      </nuxt-link>
      <div class="title text-white text-lg flex-grow text-left"> 
        <ruby>東大 <rt>とうだい</rt></ruby> 
        <ruby>CAST <rt>きゃすと</rt></ruby> 
        <ruby>五月祭 <rt>ごがつさい</rt></ruby>2025
      </div>
      
      <!-- デスクトップナビ -->
      <div class="hidden md:flex nav-links flex-wrap justify-center gap-4 flex-grow">
        <span>
          <nuxt-link to="/" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">home</span>
            ホーム
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/museum" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">school</span>
            ミュージアム
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/show" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">festival</span>
            ショー
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/atelier" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">palette</span>
            アトリエ
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/schedule" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">calendar_today</span>
            スケジュール
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/access" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">near_me</span>
            アクセス
          </nuxt-link>
        </span>
      </div>

      <div class="flex items-center gap-2">
        <nuxt-link to="/en/" class="text-white no-underline">
          English
        </nuxt-link>
        <div class="toggle-buttons flex flex-col items-center gap-1">
          <div class="label text-white text-xs">ふりがな</div>
          <div class="toggle-button py-1 px-2 rounded cursor-pointer bg-blue-300 text-white" :class="{ 'bg-blue-700': rubyVisible }" @click="toggleFurigana(true)">あり</div>
          <div class="toggle-button py-1 px-2 rounded cursor-pointer bg-blue-300 text-white" :class="{ 'bg-blue-700': !rubyVisible }" @click="toggleFurigana(false)">なし</div>
        </div>
        <div class="menu-icon flex flex-col cursor-pointer md:hidden" @click="toggleMenu">
          <span class="bg-white h-0.5 w-6 my-1"></span>
          <span class="bg-white h-0.5 w-6 my-1"></span>
          <span class="bg-white h-0.5 w-6 my-1"></span>
        </div>
      </div>
    </div>

    <!-- ハンバーガーメニュー（モバイル用） -->
    <nav :class="{ 'hidden': !menuOpen, 'block': menuOpen }" class="w-full transition-all duration-300 ease-in-out md:hidden" style="background-color: #0168B7;">
      <ul class="flex flex-col items-center py-4">
        <li class="my-2">
          <nuxt-link to="/" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">home</span>
            ホーム
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/museum" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">school</span>
            ミュージアム
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/show" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">festival</span>
            ショー
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/atelier" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">palette</span>
            アトリエ
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/schedule" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">calendar_today</span>
            スケジュール
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/access" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">near_me</span>
            アクセス
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@media (max-width: 768px) {
  .menu-icon {
    @apply flex;
  }
}
</style>
