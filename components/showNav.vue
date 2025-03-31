<template>
  <div class="museum-nav bg-white shadow-lg p-4 text-center w-4/5 mx-auto">
    <h1 class="text-3xl font-bold mb-6">
      <T v="「なるほど[体感](たいかん)！サイエンスショー」"></T>
    </h1>
    <nav class="my-4 justify-center">
      <ul class="w-4/5 flex justify-center mx-auto">
        <li class="mr-5 bg-gray-50" :class="{ 'tab-active-li': tabActive === 'rotation' }">
          <nuxt-link to="/show/rotation"  class="tab-youtube" :class="[tabActive === 'rotation' ? 'tab-active' : 'tab-inactive']">
            <T v="[回転](かいてん)ショー"></T>
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
      if (this.$route.name.match(/rotation/)) {
        return 'rotation';
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