<template>
  <div class="museum-nav bg-white shadow-lg p-4 text-center max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      <T v="「なるほど[実感](じっかん)！サイエンスミュージアム」"></T>
      <!-- この部分いつものロゴへの変更もありな気がします -->
    </h1>
    <nav class="my-4 justify-center">
      <ul class="flex border-b border-youtube justify-center">
        <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'clothes' }">
          <nuxt-link to="/museum/clothes" class="tab-youtube" :class="[tabActive === 'clothes' ? 'tab-active' : 'tab-inactive']">
            <T v="[服](ふく)ブース"></T>
          </nuxt-link>
        </li>
        <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'heat' }">
          <nuxt-link to="/museum/heat" class="tab-youtube" :class="[tabActive === 'heat' ? 'tab-active' : 'tab-inactive']">
            <T v="[熱](ねつ)ブース"></T> 
          </nuxt-link>
        </li>
        <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'pen' }">
          <nuxt-link to="/museum/pen" class="tab-youtube" :class="[tabActive === 'pen' ? 'tab-active' : 'tab-inactive']">
            <T v="[文房具](ぶんぼうぐ)ブース"></T>
          </nuxt-link>
        </li>
      </ul>
      <slot></slot>
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