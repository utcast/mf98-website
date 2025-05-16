<template>
    <!-- Confetti表示用 -->
    <div v-if="showConfetti" class="confetti-overlay">
      <img src="@/assets/img/confetti-25.gif" alt="Confetti">
    </div>
    <h2 class="bg-white text-center">
      <T :v="`Congratulations on clearing level 3! What you just filled in is ...`" />
    </h2>
    <div>
      <!-- triangle container -->
      <div class="triangle-container">
        <TitleTriangle title="Format Information" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_format.png" alt="Format Information" class="responsive-iframe">
        </div>
      </div>
    </div>
    <!-- 空のボックス -->
    <div class="empty-box"></div>
    <T :v="`　　The basic information required to read a QR code is called format information. Since this is very important information, the exact same information is written in the upper left and lower left of the QR Code. This way, you can read the QR Code even if one side is hidden. <br>
　The two left squares in the upper left corner and the bottom two squares in the lower left corner represent the error correction level of the QR Code.
`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="error-correcting level" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_wrong.png" alt="error-correcting level" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`Error Correction Level The higher the error correction level, the more the QR Code can be read even if parts of it are dirty or missing. However, the number of characters that can be placed in the QR Code will be reduced. <br>
　The three squares on the right in the upper left corner and the top three squares in the lower left corner represent a mask over the QR Code; a QR Code becomes difficult to read if too many squares of the same color are clustered together. It is difficult to tell where one square is from another. To prevent this, the rule of reversing the black and white in a certain area is called a mask. For example, in the QR Code you just filled in, three squares are black and white. In this case, the red areas in the image below are the opposite of black and white.
`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="mask" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_mask.png" alt="mask" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　Both error correction level and mask are very important information for QR codes, so please pay attention to them.<br>
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