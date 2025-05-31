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
    <!-- 五月祭は終了しましたのメッセージ -->
    <div class="text-center text-gray-600 text-lg my-4 bg-white rounded">
      <T v = "[五月祭](ごがつさい)は[終了](しゅうりょう)しました。ご[来場](らいじょう)ありがとうございました！"></T>
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
      <TitleTriangle title="[企画紹介](きかくしょうかい)" position="left" />
      <CardSlider />
    </div>
    <div class="triangle-container">
      <TitleTriangle title="[東大](とうだい)[CAST](CAST)[五月祭](ごがつさい)パンフレット" position="left" />
      <div class="iframe-container">
        <a href="/mayfes2025/ut-cast_mayfes2025_pamphlet.pdf" download>
          <img src="@/assets/img/panf.jpg" alt="パンフレット画像" class="responsive-iframe" />
        </a>
      </div>
    </div>
          <a
        href="/mayfes2025/ut-cast_mayfes2025_pamphlet.pdf"
        download
        class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition mt-10"
      >
        東大CAST五月祭パンフレット（3.0 MB）ダウンロードはこちらから！
      </a>

  </div>
      <div class="empty-box"></div>
</template>

<script setup>
import T from '~/components/T.vue'
import TitleTriangle from '~/components/TitleTriangle.vue'
import CardSlider from '~/components/CardSlider.vue'
import { useHead } from '#imports'

useHead({
  title: '東大CAST五月祭2025 | サイエンスミュージアム・ショー・アトリエ',
  meta: [
    { name: 'description', content: '東大CASTが第98回五月祭に出展します。科学のおもしろさを、多くの人に伝えたい。企画サイエンスミュージアム、サイエンスショー、サイエンスアトリエの3つの企画を出展いたしますのでぜひお楽しみください。' },
    { property: 'og:title', content: '東大CAST五月祭2025' },
    { property: 'og:description', content: '科学面白さを、多くの人に伝えたい。東大CASTが五月祭に出展！' },
    { property: 'og:image', content: 'https://ut-cast.net/mayfes2025/CAST_logo.png' },
    { property: 'og:url', content: 'https://ut-cast.net/mayfes2025/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

const isVisible = ref(false)

function onImageLoad() {
  // 画像が読み込まれたらフェードインを開始
  isVisible.value = true
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true // ページが開かれた後に表示
  }, 200) // 遅延時間を200msに調整
})
</script>

<style scoped>
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
.triangle-container {
position: relative;
width: 100%;
aspect-ratio: 16/9; /* 縦横比固定 /
margin-top: 50px; / 上部余白 */
}
.iframe-container {
  position: absolute;
  top: 70px; 
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  max-width: 90vw; /* 幅の最大値 */
}
.empty-box {
    height: 40px;
    width: 100%;
  }
</style>