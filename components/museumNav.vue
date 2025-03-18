<template>
  <div class="museum-nav bg-gray-100 rounded-2xl shadow-lg p-4 text-center max-w-xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      <T v="「なるほど[実感](じっかん)！サイエンスミュージアム」"></T>
    </h1>
    <nav>
      <ul class="grid grid-cols-1 gap-3">
        <li class="my-2">
          <nuxt-link to="/museum/close" class="block bg-white rounded-xl p-3 border border-gray-300 shadow-md text-blue-700 font-medium hover:bg-blue-100 transition-all">
            <T v="[服](ふく)ブース"></T>
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/museum/heat" class="block bg-white rounded-xl p-3 border border-gray-300 shadow-md text-blue-700 font-medium hover:bg-blue-100 transition-all">
            <T v="[熱](ねつ)ブース"></T>
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/museum/pen" class="block bg-white rounded-xl p-3 border border-gray-300 shadow-md text-blue-700 font-medium hover:bg-blue-100 transition-all">
            <T v="[文房具](ぶんぼうぐ)ブース"></T>
          </nuxt-link>
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