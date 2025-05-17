<template>
  <div class="museum-nav bg-white shadow-lg p-4 text-center mx-auto max-w-6xl">
    <!-- ロゴ画像を表示 -->
    <img src="@/assets/img/museum_logo.png" alt="ミュージアムロゴ" class="mx-auto h-16 mb-6" />
    <a href="https://gogatsusai.jp/98/visitor/project/007" target="_blank" class="text-blue-600 underline block mb-6">
      五月祭公式投票ページ(サイエンスミュージアム)はこちら！
    </a>
    <nav class="my-4 justify-center">
      <ul class="w-4/5 flex justfy-center items-center mx-auto">
        <li class="bg-gray-50" :class="{ 'tab-active-li': tabActive === 'clothes' }">
          <nuxt-link to="/museum/clothes" class="tab-youtube" :class="[tabActive === 'clothes' ? 'tab-active' : 'tab-inactive']">
            <T v="[服](ふく)ブース"></T>
          </nuxt-link>
        </li>
        <li class="bg-gray-50" :class="{ 'tab-active-li': tabActive === 'heat' }">
          <nuxt-link to="/museum/heat" class="tab-youtube" :class="[tabActive === 'heat' ? 'tab-active' : 'tab-inactive']">
            <T v="[熱](ねつ)と[電気](でんき)ブース"></T> 
          </nuxt-link>
        </li>
        <li class="bg-gray-50" :class="{ 'tab-active-li': tabActive === 'pen' }">
          <nuxt-link to="/museum/pen" class="tab-youtube " :class="[tabActive === 'pen' ? 'tab-active' : 'tab-inactive']">
            <T v="[文房具](ぶんぼうぐ)ブース"></T>
          </nuxt-link>
        </li>
      </ul>
      <slot class="p-4 border-l border-r border-b rounded-b shadow-md" :class="[!tabActive ? 'border-[#d15887]' : 'border-[#d15887]']">
      </slot>
    </nav>
    <Questionnaire></Questionnaire>
  </div>
</template>

<script setup>
import T from '~/components/T.vue'
</script>

<script>
export default {
  scrollToTop: true,
  computed: {
    tabActive() {
      if (this.$route.name.match(/clothes/)) {
        return 'clothes';
      } else if (this.$route.name.match(/heat/)) {
        return 'heat';
      } else {
        return 'pen';
      }
    },
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash);
    }
  },
};
</script>

<style scoped>
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
</style>