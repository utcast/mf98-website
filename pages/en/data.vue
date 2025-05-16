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
    <T :v="`　QRコードを読み取ると、多くの場合はWebページに遷移すると思います。これは、QRコードの中にWebページのURLが書き込まれているから。このページのURL、https://ut-cast.net/mayfes2025/data/が、今読み取ったQRコードの中に書き込まれていたんです。レベル4では、URLのなかにあるcastの部分を穴埋めしてもらいました。<br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="読み取り順" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_order.png" alt="読み取り順" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　QRコードには、上の画像のような順番でデータが入っています。横2マスずつ、右から上下上下といった順番です。このとき、レベル1～3で紹介したパターンやフォーマット情報はよけながら読んでいきます。マス目を読む順番を詳しく見ていくと、下の画像のようになります。<br>
`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="マス目の読み方" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_masume.png" alt="マス目の読み方" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　上に向かって読むときも、下に向かって読むときも、横幅2マスのうち、右から順につづら折りに読んでいきます。<br>
　次は、データの中身を見ていきましょう。データ部分を分けていくと、下の画像のようになります。<br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="データのなかみ" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_data_inside.png" alt="データのなかみ" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　データの最初にあたる、右下にある青色線に囲まれた4マスは、モード指示子というものです。この4マスのマスクを外すと、白黒白白となります。これは、このQRコードのデータが8ビットバイトモードで書かれていることを意味します。8ビットバイトモードというのは8マスで1文字を表すモードのことで、URLをQRコードに書くときは、この8ビットバイトモードが使われます。<br>
　モード指示子の次にある、緑色線に囲まれた8マスは、文字数指示子というものです。名前の通り、URLの文字数を表しています。マスクを外すと、白白黒白白黒白白になります。これは2進数という数になっていて、私たちの見慣れた10進数に直してあげると、36になり、このページのURLの文字数と一致しているのがわかります。<br>
　文字数指示子の後に続く、灰色の線で囲まれた8マスはすべて、URLの一文字一文字を表しています。8ビットバイトモードのとき、アルファベットのa~zは下の表のようにあらわされます。<br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="QRアルファベット変換表" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_alpha.png" alt="QRアルファベット変換表" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　表の2列目にある数字は、8マスがあらわす2進数を10進数に直したものです。URLに使われている文字は、アルファベットのほかにも、ハイフンは45、ピリオドは46、スラッシュ(/)は47、数字の0~9は48~57、コロン(:)は58と割り当てられています。<br>
　URLの文字が終わった後にある、黄色く囲まれた4マスは、マスクを外すと、白白白白となります。これは終端パターンと言って、URLの文字がここで終わりになることを示しています。<br>
　終端パターンの後にある、赤く囲まれたマスは、マスクを外すと、黒黒黒白黒黒白白白白白黒白白白黒という16マス分のパターンがずっと続いています。このパターンは埋め草ワードと呼ばれ、QRコードのデータの余った部分を埋める役割をしています。<br>
　ここまでかなり長くなりましたが、QRコードのデータ部分を解説してきました。ここまで読めた方は、ぜひレベル5にも挑戦してみてください！<br>

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