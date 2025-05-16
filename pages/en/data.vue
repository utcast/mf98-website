<template>
    <!-- Confetti表示用 -->
    <div v-if="showConfetti" class="confetti-overlay">
      <img src="@/assets/img/confetti-25.gif" alt="Confetti">
    </div>
    <h2 class="bg-white text-center">
      <T :v="`Congratulations on clearing level 4! What you just filled in is ...`" />
    </h2>
    <div>
      <!-- triangle container -->
      <div class="triangle-container">
        <TitleTriangle title="data" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_data.png" alt="data" class="responsive-iframe">
        </div>
      </div>
    </div>
    <!-- 空のボックス -->
    <div class="empty-box"></div>
    <T :v="`　When you read a QR code, you will be redirected to a web page in many cases. This is because the URL of the web page is written in the QR code. The URL of this page, https://ut-cast.net/mayfes2025/data/, was written in the QR code that was just scanned. In level 4, I asked the students to fill in the cast part in the url. <br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="sequential order of reading" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_order.png" alt="sequential order of reading" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　The QR Code contains data in the order shown in the image above. The order is two horizontal squares each, from right to left, up to down, up to down, and so on. At this point, the patterns and formatting information introduced in Levels 1 to 3 are read while bypassing them. The order in which the squares are read in detail is shown in the image below. <br>
`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="How to read the squares" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_masume.png" alt="How to read the squares" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　When reading upwards or downwards, the two horizontal squares are read from right to left in a spacing of two squares.<br>
　Next, let's look at the data. If we separate the data section, it will look like the image below.<br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="meaning of data" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_data_inside.png" alt="meaning of data" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　The four squares surrounded by blue lines in the lower right corner at the beginning of the data are called mode indicators. When these four squares are unmasked, they become black-and-white and white-and-white. This means that the QR Code data is written in 8-bit byte mode, which is the mode in which 8 squares represent one character. 8-bit byte mode is used when writing url in QR Code. <br>
　The eight squares surrounded by green lines next to the mode indicator are called character count indicators. As the name suggests, it indicates the number of characters in the url. When unmasked, they are white-white-black-white-black-white. This is a binary number, and if we convert it to the decimal number we are familiar with, we see that it is 36, which matches the number of characters in the url for this page. <br>
　In 8-bit byte mode, the letters a~z in the alphabet are represented as in the table below. <br>
`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="QR Alphabet Conversion Table" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_alpha.png" alt="QR Alphabet Conversion Table" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`The numbers in the second column of the table are the decimal equivalents of the binary numbers represented by the 8 squares; in addition to the alphabet, the characters used for url are assigned as follows: hyphen, 45; period, 46; slash (/), 47; numbers 0~9, 48~57; colon (:), 58. <br>
　The four squares surrounded by yellow after the end of the url character are white-white-white-white when the mask is unmasked. This is a termination pattern, indicating that the url character ends here. <br>
　The squares enclosed in red after the terminal pattern, when unmasked, continue the pattern for 16 squares: black-black-black-black-white-black-white-white-white-black. This pattern is called a fill-in-the-blank word, and it fills in the excess QR Code data. <br>
　This has been a rather lengthy explanation of the data portion of the QR Code. If you have been able to read this far, please try level 5! <br>

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