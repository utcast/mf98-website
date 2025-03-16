<template>
  <div class="atelier-nav text-center p-4">
    <h1 class="text-2xl mb-4">
      <T v="「作って[体感](たいかん)！サイエンスアトリエ」"></T>
    </h1>
    <nav>
      <ul class="list-none p-0">
        <li class="my-2">
          <nuxt-link to="/atelier/box" class="text-blue-700 no-underline hover:underline">
            <T v="[光](ひかり)の[箱](はこ)"></T>
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/atelier/pendulum" class="text-blue-700 no-underline hover:underline">
            <T v="[念力](ねんりき)[振](ふ)り[子](こ)"></T>
          </nuxt-link>
        </li>
        <li class="my-2">
          <nuxt-link to="/atelier/lightcop" class="text-blue-700 no-underline hover:underline">
            <T v="[三原色](さんげんしょく)[コップ](こっぷ)"></T>
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