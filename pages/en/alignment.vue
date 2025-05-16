<template>
    <!-- Confetti表示用 -->
    <div v-if="showConfetti" class="confetti-overlay">
      <img src="@/assets/img/confetti-25.gif" alt="Confetti">
    </div>
    <h2 class="bg-white text-center">
      <T :v="`Congratulations on clearing level 2! What you just filled in is ...`" />
    </h2>
    <div>
      <!-- triangle container -->
      <div class="triangle-container">
        <TitleTriangle title="Alignment and timing patterns" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_alignment.png" alt="Alignment and timing patterns" class="responsive-iframe">
        </div>
      </div>
    </div>
    <!-- 空のボックス -->
    <div class="empty-box"></div>
    <T :v="`　The square pattern in the lower right corner of the QR Code that is slightly smaller than the finder pattern is called the alignment pattern. The role of the alignment pattern is to compensate for the misalignment of the squares when the QR Code is read. <br>
　The pattern of alternating black and white squares arranged to connect the finder patterns is called a timing pattern. Its role is to make it easy to see how many squares each square is from the left and how many squares are from the top. <br>
　Both patterns contribute to the quick reading of QR codes when they are distorted or viewed from an angle.<br>
`" />
  
  
  
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