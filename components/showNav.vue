<template>
  <div class="museum-nav bg-white shadow-lg p-4 text-center max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      <T v="「なるほど[体感](たいかん)！サイエンスショー」"></T>
    </h1>
    <nav class="my-4 justify-center">
      <ul class="flex border-b border-youtube justify-center">
        <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'clothes' }">
          <nuxt-link to="/show/rotation"  class="tab-youtube" :class="[tabActive === 'clothes' ? 'tab-active' : 'tab-inactive']">
            <T v="[回転](かいてん)ショー"></T>
          </nuxt-link>
        </li>
      </ul>
      <slot></slot>
    </nav>
  </div>
</template>

<script setup>
import T from '~/components/T.vue'
</script>

<style scoped>
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
</style>