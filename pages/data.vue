<template>
    <!-- Confetti表示用 -->
    <div v-if="showConfetti" class="confetti-overlay">
      <img src="@/assets/img/confetti-25.gif" alt="Confetti">
    </div>
    <nuxt-link to="/en/data" class="text-blue-600 underline block my-4">
        English version of this page is here.
    </nuxt-link>
    <h2 class="bg-white text-center">
      <T :v="`レベル4クリアおめでとう！[今](いま)[埋](う)めたのは...？`" />
    </h2>
    <div>
      <!-- triangle container -->
      <div class="triangle-container">
        <TitleTriangle title="データ" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_data.png" alt="データ" class="responsive-iframe">
        </div>
      </div>
    </div>
    <!-- 空のボックス -->
    <div class="empty-box"></div>
    <T :v="`　[QR](きゅーあーる)コードを[読](よ)み[取](と)ると、[多](おお)くの[場合](ばあい)は[Web](うぇぶ)ページに[遷移](せんい)すると思います。これは、[QR](きゅーあーる)コードの[中](なか)に[Web](うぇぶ)ページの[URL](ゆーあーるえる)が[書](か)き[込](こ)まれているから。
このページの[URL](ゆーあーるえる)、https://ut-cast.net/mayfes2025/data/ が、[今](いま)[読](よ)み[取](と)った[QR](きゅーあーる)コードの[中](なか)に[書](か)き[込](こ)まれていたんです。レベル4では、[URL](ゆーあーるえる)のなかにあるcastの[部分](ぶぶん)を[穴埋](あなう)めしてもらいました。
<br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="[読](よ)み[取](と)り[順](じゅん)" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_order.png" alt="読み取り順" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`　[QR](きゅーあーる)コードには、[上](うえ)の[画像](がぞう)のような[順番](じゅんばん)でデータが[入](はい)っています。[横](よこ)2マスずつ、[右](みぎ)から[上下上下](じょうげじょうげ)といった[順番](じゅんばん)です。
このとき、レベル1～3で[紹介](しょうかい)したパターンやフォーマット[情報](じょうほう)は[避](よ)けながら[読](よ)んでいきます。マス[目](め)を[読](よ)む[順番](じゅんばん)を[詳](くわ)しく[見](み)ていくと、[下](した)の[画像](がぞう)のようになります。
<br>
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
    <T :v="`　[上](うえ)に[向](む)かって[読](よ)むときも、[下](した)に[向](む)かって[読](よ)むときも、[横幅](よこはば)2マスのうち、[右](みぎ)から[順](じゅん)につづら[折](お)りに[読](よ)んでいきます。<br>
　[次](つぎ)は、データの[中身](なかみ)を[見](み)ていきましょう。データ[部分](ぶぶん)を[分](わ)けていくと、[下](した)の[画像](がぞう)のようになります。
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
    <T :v="`　データの[最初](さいしょ)にあたる、[右下](みぎした)にある[青色線](あおいろせん)に[囲](かこ)まれた4マスは、モード[指示子](しじし)というものです。この4マスのマスクを[外](はず)すと、[白黒白白](しろくろしろしろ)となります。これは、この[QR](きゅーあーる)コードのデータが8ビットバイトモードで[書](か)かれていることを[意味](いみ)します。
8ビットバイトモードというのは8マスで1[文字](もじ)を[表](あらわ)すモードのことで、[URL](ゆーあーるえる)を[QR](きゅーあーる)コードに[書](か)くときは、この8ビットバイトモードが[使](つか)われます。<br>
　モード[指示子](しじし)の[次](つぎ)にある、[緑色線](みどりいろせん)に[囲](かこ)まれた8マスは、[文字数指示子](もじすうしじし)というものです。[名前](なまえ)のとおり、[URL](ゆーあーるえる)の[文字数](もじすう)を[表](あらわ)しています。マスクを[外](はず)すと、[白白黒白白黒白白](しろしろくろしろしろくろしろしろ)になります。これは2[進数](しんすう)という[数](すう)になっていて、[私](わたし)たちの[見慣](みな)れた10[進数](しんすう)に[直](なお)してあげると、36になり、このページの[URL](ゆーあーるえる)の[文字数](もじすう)と[一致](いっち)しているのがわかります。<br>
　[文字数指示子](もじすうしじし)の[後](あと)に[続](つづ)く、[灰色](はいいろ)の[線](せん)で[囲](かこ)まれた8マスはすべて、[URL](ゆーあーるえる)の[一文字一文字](ひともじひともじ)を[表](あらわ)しています。8ビットバイトモードのとき、[アルファベット](あるふぁべっと)のa~zは[下](した)の[表](ひょう)のようにあらわされます。<br>

`" />
    <div>
        <div class="triangle-container">
        <TitleTriangle title="[QR](きゅーあーる)アルファベット[変換表](へんかんひょう)" position="left" />
        <div class="iframe-container">
          <img src="@/assets/img/QR/QR_alpha.png" alt="QRアルファベット変換表" class="responsive-iframe">
        </div>
      </div>
    </div>
    <div class="empty-box"></div>
    <T :v="`[表](ひょう)の2[列目](れつめ)にある[数字](すうじ)は、8マスが[表](あらわ)す2[進数](しんすう)を10[進数](しんすう)に[直](なお)したものです。[URL](ゆーあーるえる)に[使](つか)われている[文字](もじ)は、アルファベットのほかにも、ハイフンは45、ピリオドは46、スラッシュ(/)は47、[数字](すうじ)の0~9は48~57、コロン(:)は58と[割](わ)り[当](あ)てられています。<br>
[URL](ゆーあーるえる)の[文字](もじ)が[終](お)わった[後](あと)にある、[黄色](きいろ)く[囲](かこ)まれた4マスは、マスクを[外](はず)すと、白白白白となります。これは[終端](しゅうたん)パターンと[言](い)って、[URL](ゆーあーるえる)の[文字](もじ)がここで[終](お)わりになることを[示](しめ)しています。<br>
[終端](しゅうたん)パターンの[後](あと)にある、[赤](あか)く[囲](かこ)まれたマスは、マスクを[外](はず)すと、[黒](くろ)[黒](くろ)[黒](くろ)[白](しろ)[黒](くろ)[黒](くろ)[白](しろ)[白](しろ)[白](しろ)[白](しろ)[白](しろ)[黒](くろ)[白](しろ)[白](しろ)[白](しろ)[黒](くろ)
という16マス)[分](ぶん)のパターンがずっと[続](つづ)いています。このパターンは[埋](う)め[草](ぐさ)ワードと[呼](よ)ばれ、[QR](きゅーあーる)コードのデータの[余](あま)った[部分](ぶぶん)を[埋](う)める[役割](やくわり)をしています。<br>
ここまでかなり[長](なが)くなりましたが、[QR](きゅーあーる)コードのデータ[部分](ぶぶん)を[解説](かいせつ)してきました。ここまで[読](よ)めた[方](かた)は、ぜひレベル5にも[挑戦](ちょうせん)してみてください！<br>
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