<template>
  <div class="flex flex-col items-center" style="width:100%;height:100%;">
    <div class="flex justify-center space-x-4 my-4">
      <img src="@/assets/img/museum_logo.png" alt="ミュージアムロゴ" class="h-16">
      <img src="@/assets/img/show_logo.png" alt="ショーロゴ" class="h-16">
      <img src="@/assets/img/atelier_logo.png" alt="アトリエロゴ" class="h-16">
    </div>
    <div class="container flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg my-8">
      <h1>
        <T v="[東大](とうだい) [CAST](きゃすと) [五月祭](ごがつさい)2025"></T>
      </h1>
      <div class="text-lg md:text-3xl my-1">
        <span class="text-sm md:text-base">5</span><span class="text-xs"><T v="[月](がつ)"></T></span>
        <span class="text-sm md:text-base ml-1">24</span><span class="text-xs"><T v="[日](にち)"></T></span>
        <span class="text-xs bg-blue-600 text-white mx-2 p-1 rounded">土</span>
        <span class="material-symbols-outlined mx-2 text-lg">chevron_right</span>
        <span class="text-sm md:text-base">25</span><span class="text-xs"><T v="[日](にち)"></T></span>
        <span class="text-xs bg-red-600 text-white mx-2 p-1 rounded">日</span>
      </div>
      <div>
        <T v="「なるほど[実感](じっかん)！サイエンスミュージアム」"></T>
        <T v="「なるほど[体感](たいかん)！サイエンスショー」"></T>
        <T v="「[作](つく)って[体感](たいかん)！サイエンスアトリエ」"></T>
        <T v="を[出展](しゅってん)しています！"></T>
      </div>
    </div>
    <!-- TitleTriangle コンポーネントを追加 -->
    <div class="w-full flex justify-start">
      <TitleTriangle title="企画紹介" position="left" />
      <CardSlider />
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import T from '~/components/T.vue'
import TitleTriangle from '~/components/TitleTriangle.vue'

library.add(faCaretRight)

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    T,
    TitleTriangle,
  },
}
</script>

<style scoped>
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
</style>