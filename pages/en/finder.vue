<template>
  <!-- Confetti表示用 -->
  <div v-if="showConfetti" class="confetti-overlay">
    <img src="@/assets/img/confetti-25.gif" alt="Confetti">
  </div>
  <h2 class="bg-white text-center">
    <T :v="`Congratulations on clearing level 1! What you just filled in is ...`" />
  </h2>
  <div>
    <!-- triangle container -->
    <div class="triangle-container">
      <TitleTriangle title="Finder Patterns" position="left" />
      <div class="iframe-container">
        <img src="@/assets/img/QR/finder.png" alt="Finder Patterns" class="responsive-iframe">
      </div>
    </div>
  </div>
  <!-- 空のボックス -->
  <div class="empty-box"></div>
  <T :v="`The square-shaped pattern in the three corners of the QR Code is called a finder pattern. Thanks to this finder pattern, the machine recognizes where the QR Code is located. Incidentally, one side of the outer square of the finder pattern has 7 squares, and one side of the inner square has 3 squares. The reason for this is that Masahiro Hara, the inventor of the QR Code, investigated all kinds of printed matter and found that this pattern appeared very infrequently.<br>`" />



  <small>QR Code is a registered trademark of DENSO WAVE.</small>

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