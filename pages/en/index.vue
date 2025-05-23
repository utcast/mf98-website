<template>
  <div class="flex flex-col items-center" style="width:100%;height:100%;">
    <div class="flex justify-center space-x-4 my-4">
      <NuxtLink to="/en/museum">
        <img src="@/assets/img/museum_logo.png" alt="Museum Logo" class="h-16">
      </NuxtLink>
      <NuxtLink to="/en/show">
        <img src="@/assets/img/show_logo.png" alt="Show Logo" class="h-16">
      </NuxtLink>
      <NuxtLink to="/en/atelier">
        <img src="@/assets/img/atelier_logo.png" alt="Atelier Logo" class="h-16">
      </NuxtLink>
    </div>
    <div class="flex flex-col md:flex-row items-center md:space-x-4">
      <div
        v-if="isVisible"
        class="flex justify-center w-full md:w-auto animate-fadeInLeft"
      >
        <img 
          src="@/assets/img/jikken_picture.png" 
          alt="Experiment Picture" 
          class="h-80 my-4 object-contain"
          @load="onImageLoad"
        >
      </div>
      <div
        v-if="isVisible"
        class="container flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg my-8 animate-fadeInRight"
      >
        <h1>
          <T v="UT CAST May Festival 2025"></T>
        </h1>
        <div class="text-lg md:text-3xl my-1">
          <span class="text-sm md:text-base">May</span><span class="text-xs"></span>
          <span class="text-sm md:text-base ml-1">24th</span><span class="text-xs"></span>
          <span class="text-xs bg-blue-600 text-white mx-2 p-1 rounded">Sat</span>
          <span class="material-symbols-outlined mx-2 text-lg">chevron_right</span>
          <span class="text-sm md:text-base">25th</span><span class="text-xs"></span>
          <span class="text-xs bg-red-600 text-white mx-2 p-1 rounded">Sun</span>
        </div>
        <div>
          <T v="We have Science Museum, Science Show, and Science Atelier!"></T>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-start">
      <TitleTriangle title="Contents" position="left" />
      <CardSlider />
    </div>
        <div class="triangle-container">
      <TitleTriangle title="UT-CAST MayFes Pamphlet" position="left" />
      <div class="iframe-container">
        <a href="/mayfes2025/panf.pdf" download>
          <img src="@/assets/img/panf.jpg" alt="Pamphlet image" class="responsive-iframe" />
        </a>
      </div>
    </div>
          <a
        href="/mayfes2025/panf.pdf"
        download
        class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition mt-10"
      >
        Download PDF
      </a>

  </div>
      <div class="empty-box"></div>
</template>

<script>
import T from '~/components/en/T.vue'
import TitleTriangle from '~/components/en/TitleTriangle.vue'
import CardSlider from '~/components/en/CardSlider.vue'

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
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
</style>