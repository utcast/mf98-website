<template>
  <div class="museum-nav atelier-nav bg-white shadow-lg p-4 text-center max-w-6xl mx-auto">
    <!-- ロゴ画像を表示 -->
    <img src="@/assets/img/atelier_logo.png" alt="atelier logo" class="mx-auto h-16 mb-6" />
    <a href="https://gogatsusai.jp/98/visitor/en/project/002" target="_blank" class="text-blue-600 underline block mb-6">
      Click here for the official May Festival voting page (Science Atelier)!
    </a>
 
      <nav class="my-4 justify-center">
        <ul class="w-4/5 flex  justfy-center items-center mx-auto">
          <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'box' }">
            <nuxt-link to="/en/atelier/box" class="tab-youtube" :class="[tabActive === 'box' ? 'tab-active' : 'tab-inactive']">
              <T v="light box"></T>
            </nuxt-link>
          </li>
          <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'pendulum' }">
            <nuxt-link to="/en/atelier/pendulum" class="tab-youtube" :class="[tabActive === 'pendulum' ? 'tab-active' : 'tab-inactive']">
              <T v="telekinetic pendulum"></T>
            </nuxt-link>
          </li>
          <li class="mr-1" :class="{ 'tab-active-li': tabActive === 'lightcop' }">
            <nuxt-link to="/en/atelier/lightcop" class="tab-youtube" :class="[tabActive === 'lightcop' ? 'tab-active' : 'tab-inactive']">
              <T v="three primary colors cup"></T>
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