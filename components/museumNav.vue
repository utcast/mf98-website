<template>
    <div class="museum-nav text-center p-4">
      <h1 class="text-2xl mb-4">
        <T v="「なるほど[実感](じっかん)！サイエンスミュージアム」"></T>
      </h1>
      <nav>
        <ul class="list-none p-0">
          <li class="my-2">
            <nuxt-link to="/museum/close" class="text-blue-700 no-underline hover:underline">服ブース</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link to="/museum/heat" class="text-blue-700 no-underline hover:underline">熱ブース</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link to="/museum/pen" class="text-blue-700 no-underline hover:underline">文房具ブース</nuxt-link>
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