<template>
  <div class="flex flex-col items-center" style="width:100%;height:100%;">
    <div class="flex justify-center space-x-4 my-4">
      <NuxtLink to="/museum">
        <img src="@/assets/img/museum_logo.png" alt="ミュージアムロゴ" class="h-16">
      </NuxtLink>
      <NuxtLink to="/show">
        <img src="@/assets/img/show_logo.png" alt="ショーロゴ" class="h-16">
      </NuxtLink>
      <NuxtLink to="/atelier">
        <img src="@/assets/img/atelier_logo.png" alt="アトリエロゴ" class="h-16">
      </NuxtLink>
    </div>
    <div class="flex flex-col md:flex-row items-center md:space-x-4">
      <div
        v-if="isVisible"
        class="flex justify-center w-full md:w-auto animate-fadeInLeft"
      >
        <img 
          src="@/assets/img/jikken_picture.png" 
          alt="実験の画像" 
          class="h-80 my-4 object-contain"
          @load="onImageLoad"
        >
      </div>
      <div
        v-if="isVisible"
        class="container flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg my-8 animate-fadeInRight"
      >
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
    </div>
    <div class="w-full flex justify-start">
      <TitleTriangle title="企画紹介" position="left" />
      <CardSlider />
    </div>
  </div>
</template>

<script>
import T from '~/components/T.vue'
import TitleTriangle from '~/components/TitleTriangle.vue'
import CardSlider from '~/components/CardSlider.vue'

export default {
  components: {
    T,
    TitleTriangle,
    CardSlider,
  },
  data() {
    return {
      isVisible: false, // 初期状態は非表示
    };
  },
  methods: {
    onImageLoad() {
      // 画像が読み込まれたらフェードインを開始
      this.isVisible = true;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true; // ページが開かれた後に表示
    }, 200); // 遅延時間を200msに調整
  },
}
</script>

<style scoped>
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
</style>