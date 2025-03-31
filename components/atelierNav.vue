<template>
  <div class="museum-nav atelier-nav bg-white shadow-lg p-4 text-center max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      <T v="「作って[体感](たいかん)！サイエンスアトリエ」"></T>
    </h1>
      <nav class="my-4 justify-center">
        <ul class="w-4/5 flex  justfy-center items-center mx-auto">
          <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'box' }">
            <nuxt-link to="/atelier/box" class="tab-youtube" :class="[tabActive === 'box' ? 'tab-active' : 'tab-inactive']">
              <T v="[光](ひかり)の[箱](はこ)"></T>
            </nuxt-link>
          </li>
          <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'pendulum' }">
            <nuxt-link to="/atelier/pendulum" class="tab-youtube" :class="[tabActive === 'pendulum' ? 'tab-active' : 'tab-inactive']">
              <T v="[念力](ねんりき)[振](ふ)り[子](こ)"></T>
            </nuxt-link>
          </li>
          <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'lightcop' }">
            <nuxt-link to="/atelier/lightcop" class="tab-youtube" :class="[tabActive === 'lightcop' ? 'tab-active' : 'tab-inactive']">
              <T v="[三原色](さんげんしょく)[コップ](こっぷ)"></T>
            </nuxt-link>
          </li>
        </ul>
        <slot></slot>
      </nav>
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
      if (this.$route.name.match(/box/)) {
        return 'box';
      } else if (this.$route.name.match(/pendulum/)) {
        return 'pendulum';
      } else {
        return 'lightcop';
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