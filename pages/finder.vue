<template>
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
  <T :v="`[QR](きゅーあーる)コードの3[隅](すみ)にある[正方形](せいほうけい)の[形](かたち)をした[模様](もよう)は、ファインダパターンという[名前](なまえ)がついています。このファインダパターンのおかげで、[機械](きかい)は[QR](きゅーあーる)コードがどこにあるかを[認識](にんしき)しています。ちなみに、ファインダパターンの[外側](そとがわ)の[正方形](せいほうけい)の[一辺](いっぺん)は7マス、[内側](うちがわ)の[正方形](せいほうけい)の[一辺](いっぺん)は3マスと[決](き)まっています。これは、[QR](きゅーあーる)コードを[発明](はつめい)した[原昌宏](はらまさひろ)さんが、ありとあらゆる[印刷物](いんさつぶつ)を[調](しら)べ[上](あ)げた[結果](けっか)、[出現頻度](しゅつげんひんど)が[極](きわ)めて[小](ちい)さかったのがこの[模様](もよう)だったためだそう。`" />
</template>

<script setup>
import T from '~/components/T.vue'
import TitleTriangle from '~/components/TitleTriangle.vue'
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
</style>