<template>
  <footer style="background-color: #0168B7; width: 100%;">
    <div class="flex flex-col items-center md:flex-row md:justify-center">
      <nuxt-link to="/" class="text-white mb-2 md:mb-0 md:mx-4">トップページ</nuxt-link>
      <a href="https://x.com/ut_cast?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4"><ruby>公式X<rt>こうしきえっくす</rt></ruby></a>
      <a href="https://www.instagram.com/ut_cast/" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4"><ruby>公式Instagram<rt>こうしきいんすたぐらむ</rt></ruby></a>
      <a href="https://www.youtube.com/channel/UC6XSE6KzlpREBCT7PliIPnQ" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4"><ruby>公式YouTube<rt>こうしきゆーちゅーぶ</rt></ruby></a>
      <a href="https://gogatsusai.jp/98/visitor/" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4"><ruby>五月祭公式<rt>ごがつさいこうしき</rt></ruby>サイト</a>
      <T v="&copy [東大](とうだい) [CAST](きゃすと) [五月祭](ごがつさい)2025" class="text-center text-white md:mx-4"></T>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #0168B7; /* 背景色を設定 */
  padding: 1rem; /* パディングを設定 */
}

a {
  color: #ffffff; /* リンクの色を白に設定 */
  text-decoration: none; /* リンクの下線を削除 */
}

a:hover {
  text-decoration: underline; /* ホバー時に下線を表示 */
}

.nuxt-link {
  color: #ffffff; /* Nuxtリンクの色を白に設定 */
}

.text-white {
  color: #ffffff; /* テキストの色を白に設定 */
}
</style>