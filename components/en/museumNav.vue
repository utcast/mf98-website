<template>
  <div class="museum-nav bg-white shadow-lg p-4 text-center mx-auto max-w-6xl">
    <!-- ロゴ画像を表示 -->
    <img src="@/assets/img/museum_logo.png" alt="Museum Logo" class="mx-auto h-16 mb-6" />
    <a href="https://gogatsusai.jp/98/visitor/en/project/007" target="_blank" class="text-blue-600 underline block mb-6">
      Click here for the official May Festival voting page (Science Museum)!
    </a>
    <nav class="my-4 justify-center">
      <ul class="w-4/5 flex justfy-center items-center mx-auto">
        <li class="bg-gray-50" :class="{ 'tab-active-li': tabActive === 'clothes' }">
          <nuxt-link to="/en/museum/clothes" class="tab-youtube" :class="[tabActive === 'clothes' ? 'tab-active' : 'tab-inactive']">
            <T v="clothes booth"></T>
          </nuxt-link>
        </li>
        <li class="bg-gray-50" :class="{ 'tab-active-li': tabActive === 'heat' }">
          <nuxt-link to="/en/museum/heat" class="tab-youtube" :class="[tabActive === 'heat' ? 'tab-active' : 'tab-inactive']">
            <T v="Thermal and Electric Booths"></T> 
          </nuxt-link>
        </li>
        <li class="bg-gray-50" :class="{ 'tab-active-li': tabActive === 'pen' }">
          <nuxt-link to="/en/museum/pen" class="tab-youtube " :class="[tabActive === 'pen' ? 'tab-active' : 'tab-inactive']">
            <T v="Stationery Booth"></T>
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
import T from '~/components/en/T.vue'
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