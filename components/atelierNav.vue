<template>
    <div class="atelier-nav text-center p-4">
      <h1 class="text-2xl mb-4">
        <T v="「作って[体感](たいかん)！サイエンスアトリエ」"></T>
      </h1>
      <nav>
        <ul class="list-none p-0">
          <li class="my-2">
            <nuxt-link to="/atelier/box" class="text-blue-700 no-underline hover:underline">光の箱</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link to="/atelier/pendulum" class="text-blue-700 no-underline hover:underline">念力振り子</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link to="/atelier/lightcop" class="text-blue-700 no-underline hover:underline">三原色コップ</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  import T from '~/components/T.vue'
  </script>
  
  <style scoped>
  /* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
  </style>