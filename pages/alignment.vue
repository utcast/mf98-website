<template>
    <!-- Confetti表示用 -->
    <div v-if="showConfetti" class="confetti-overlay">
      <img src="@/assets/img/confetti-25.gif" alt="Confetti">
    </div>
    <nuxt-link to="/en/alignment" class="text-blue-600 underline block my-4">
        English version of this page is here.
    </nuxt-link>
    <h2 class="bg-white text-center">
      <T :v="`レベル2クリアおめでとう！[今](いま)[埋](う)めたのは...？`" />
    </h2>
    <div>
      <!-- triangle container -->
      <div class="triangle-container">
        <TitleTriangle title="アライメントパターンとタイミングパターン" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_alignment.png" alt="アライメントパターンとタイミングパターン" class="responsive-iframe">
        </div>
      </div>
    </div>
    <!-- 空のボックス -->
    <div class="empty-box"></div>
    <T :v="`　[QR](きゅーあーる)コードの[右下](みぎした)にある、ファインダパターンよりも[少](すこ)し[小](ちい)さめな[正方形](せいほうけい)の[模様](もよう)を、アライメントパターンと[言](い)います。アライメントパターンの[役割](やくわり)は、[QR](きゅーあーる)コードを[読](よ)み[取](と)るとき、マス[目](め)がずれてしまうのを[補正](ほせい)することです。<br>
　また、ファインダパターン[同士](どうし)をつなぐように[配置](はいち)されている[白黒](しろくろ)が[交互](こうご)に[続](つづ)くパターンは、タイミングパターンと[言](い)います。[各](かく)マスが[左](ひだり)から[何](なん)マス[目](め)か、[上](うえ)から[何](なん)マス[目](め)かをわかりやすくするのが[役割](やくわり)です。<br>
　どちらのパターンも、ゆがんでいたり[斜](なな)めから[見](み)たときの[QR](きゅーあーる)コードを[素早](すばや)く[読](よ)み[取](と)ることに[貢献](こうけん)しているんです。<br>
`" />
  
  
  
    <small>QRコードは株式会社デンソーウェーブの登録商標です。</small>
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import T from '~/components/T.vue'
  import TitleTriangle from '~/components/TitleTriangle.vue'
  
  // confetti表示用フラグ
  const showConfetti = ref(false)
  
  onMounted(() => {
    // 既に表示済みかを確認
    if (!sessionStorage.getItem('confettiShown')) {
      showConfetti.value = true
      // 3秒後に非表示
      setTimeout(() => {
        showConfetti.value = false
      }, 3000)
      sessionStorage.setItem('confettiShown', 'true')
    }
  })
  </script>
  
  <style scoped>
  .triangle-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9; /* 縦横比固定 */
    margin-top: 50px; /* 上部余白 */
  }
  
  .iframe-container {
    position: absolute;
    top: 70px; 
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    max-width: 90vw; /* 幅の最大値 */
  }
  
  .responsive-iframe {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
  
  /* 空のボックス */
  .empty-box {
    height: 40px;
    width: 100%;
  }
  
  /* Confetti用オーバーレイ */
  .confetti-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
  .confetti-overlay img {
    width: 100%; /* ここで幅を100%に設定 */
    height: auto; /* アスペクト比を維持 */
  }
  </style>