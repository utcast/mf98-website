<template>
  <!-- Confetti表示用 -->
  <div v-if="showConfetti" class="confetti-overlay">
    <img src="@/assets/img/confetti-25.gif" alt="Confetti">
  </div>
  <nuxt-link to="/en/finder" class="text-blue-600 underline block my-4">
        English version of this page is here.
  </nuxt-link>
  <h2 class="bg-white text-center">
    <T :v="`レベル1クリアおめでとう！今埋めたのは...？`" />
  </h2>
  <div>
    <!-- triangle container -->
    <div class="triangle-container">
      <TitleTriangle title="ファインダパターン" position="left" />
      <div class="iframe-container">
        <img src="@/assets/img/QR/finder.png" alt="ファインダパターン" class="responsive-iframe">
      </div>
    </div>
  </div>
  <!-- 空のボックス -->
  <div class="empty-box"></div>
  <T :v="`[QR](きゅーあーる)コードの3[隅](すみ)にある[正方形](せいほうけい)の[形](かたち)をした[模様](もよう)は、ファインダパターンという[名前](なまえ)がついています。このファインダパターンのおかげで、[機械](きかい)は[QR](きゅーあーる)コードがどこにあるかを[認識](にんしき)しています。ちなみに、ファインダパターンの[外側](そとがわ)の[正方形](せいほうけい)の[一辺](いっぺん)は7マス、[内側](うちがわ)の[正方形](せいほうけい)の[一辺](いっぺん)は3マスと[決](き)まっています。これは、[QR](きゅーあーる)コードを[発明](はつめい)した[原昌宏](はらまさひろ)さんが、ありとあらゆる[印刷物](いんさつぶつ)を[調](しら)べ[上](あ)げた[結果](けっか)、[出現頻度](しゅつげんひんど)が[極](きわ)めて[小](ちい)さかったのがこの[模様](もよう)だったためだそう。<br>`" />



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