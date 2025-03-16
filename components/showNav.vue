<template>
  <div class="show-nav text-center p-4">
    <h1 class="text-2xl mb-4">
      <T v="「なるほど[体感](たいかん)！サイエンスショー」"></T>
    </h1>
    <nav>
      <ul class="list-none p-0">
        <li class="my-2">
          <nuxt-link to="/show/rotation" class="text-blue-700 no-underline hover:underline">
            <T v="[回転](かいてん)ショー"></T>
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