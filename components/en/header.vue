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
  <header class="flex flex-col p-4" style="background-color: #0168B7; width: 100%;">
    <div class="header-content flex justify-between items-center w-full max-w-screen-xl">
      <!-- ロゴ と UT CAST May Festival2025 -->
      <div class="flex items-center">
        <nuxt-link to="/en/" class="flex items-center">
          <img src="~/assets/img/CASTロゴ_透過.png" alt="CAST Logo" class="h-12 mr-4">
        </nuxt-link>
        <span class="text-white text-xl font-bold">
          UT CAST May Festival2025
        </span>
      </div>
      <!-- デスクトップナビ（中）：md以上で表示 -->
      <div class="hidden md:flex nav-links flex-wrap justify-center gap-4">
        <span>
          <nuxt-link to="/en/" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">home</span>
            Home
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/en/museum" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">school</span>
            Museum
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/en/show" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">festival</span>
            Show
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/en/atelier" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">palette</span>
            Atelier
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/en/schedule" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">calendar_today</span>
            Schedule
          </nuxt-link>
        </span>
        <span>
          <nuxt-link to="/en/access" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">near_me</span>
            Access
          </nuxt-link>
        </span>
      </div>
      <!-- 右側：常に表示する日本語ボタン＋（モバイル用）ハンバーガーメニュー -->
      <div class="flex items-center gap-2">
        <nuxt-link :to="japanesePath" class="text-white no-underline flex items-center">
          日本語
        </nuxt-link>
        <!-- モバイル用：ハンバーガーメニューボタン -->
        <button @click="toggleMenu" class="block md:hidden text-white focus:outline-none">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>

    <!-- ハンバーガーメニューのナビゲーション（モバイル用） -->
    <nav :class="{ 'hidden': !menuOpen, 'block': menuOpen }" class="w-full transition-all duration-300 ease-in-out md:hidden" style="background-color: #0168B7;">
      <ul class="flex flex-col items-center py-4">
        <li class="my-2">
          <nuxt-link to="/en/" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">home</span>
            Home
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/en/museum" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">school</span>
            Museum
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/en/show" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">festival</span>
            Show
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/en/atelier" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">palette</span>
            Atelier
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/en/schedule" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">calendar_today</span>
            Schedule
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/en/access" class="text-white no-underline flex items-center">
            <span class="material-symbols-outlined">near_me</span>
            Access
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* 必要に応じてスタイルを調整 */
</style>
