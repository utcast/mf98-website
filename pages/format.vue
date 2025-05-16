<template>
    <!-- Confetti表示用 -->
    <div v-if="showConfetti" class="confetti-overlay">
      <img src="@/assets/img/confetti-25.gif" alt="Confetti">
    </div>
    <h2 class="bg-white text-center">
      <T :v="`レベル3クリアおめでとう！[今](いま)[埋](う)めたのは...？`" />
    </h2>
    <div>
      <!-- triangle container -->
      <div class="triangle-container">
        <TitleTriangle title="フォーマット情報" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_format.png" alt="フォーマット情報" class="responsive-iframe">
        </div>
      </div>
    </div>
    <!-- 空のボックス -->
    <div class="empty-box"></div>
    <T :v="`　　[QR](きゅーあーる)コードを[読](よ)み[取](と)るために[必要](ひつよう)な[基本的](きほんてき)な[情報](じょうほう)をフォーマット[情報](じょうほう)といいます。[非常](ひじょう)に[重要](じゅうよう)な[情報](じょうほう)なので、[QR](きゅーあーる)コードの[左上](ひだりうえ)と[左下](ひだりした)に、[全](まった)く[同](おな)じ[内容](ないよう)が[書](か)かれています。こうすれば、[片方](かたほう)が[隠](かく)れてしまっても[QR](きゅーあーる)コードを[読](よ)むことができますよね。<br>
　[左上](ひだりうえ)の[左](ひだり)2マスと[左下](ひだりした)の[下](した)2マスは、[QR](きゅーあーる)コードの[誤](あやま)り[訂正](ていせい)レベルを[表](あらわ)しています。

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="[誤](あやま)り[訂正](ていせい)レベル" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_wrong.png" alt="誤り訂正レベル" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　[誤](あやま)り[訂正](ていせい)レベルが[高](たか)いほど、[QR](きゅーあーる)コードの[一部](いちぶ)が[汚](よご)れていたり、[欠](か)けていたりしても[読](よ)み[取](と)れるようになります。しかし、[QR](きゅーあーる)コードに[入](い)れられる[文字数](もじすう)は[少](すく)なくなります。<br>
　[左上](ひだりうえ)の[右](みぎ)3マスと[左下](ひだりした)の[上](うえ)3マスは、[QR](きゅーあーる)コードにかかっているマスクを[表](あらわ)しています。[QR](きゅーあーる)コードは[同](おな)じ[色](いろ)のマスが[固](かた)まりすぎると[読](よ)み[取](と)りにくくなってしまいます。どこからどこまで1マスなのか、わかりにくくなってしまいますからね。これを[防](ふせ)ぐために、[決](き)まった[場所](ばしょ)の[白黒](しろくろ)を[反対](はんたい)にしましょう、という[決](き)まりが、マスクというものになります。<br>
　たとえば、[今](いま)[埋](う)めた[QR](きゅーあーる)コード、3マスが[黒白黒](くろしろくろ)になってましたよね。この[時](とき)は、[下](した)の[画像](がぞう)の[赤色](あかいろ)の[部分](ぶぶん)が[白黒反対](しろくろはんたい)になっています。
`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="マスク" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_mask.png" alt="マスク" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　[誤](あやま)り[訂正](ていせい)レベルとマスク、どちらも[QR](きゅーあーる)コードにはとっても[大事](だいじ)な[情報](じょうほう)なので、[注目](ちゅうもく)してみてください。<br>
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