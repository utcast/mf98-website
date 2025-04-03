<template>
  <div class="museum-nav bg-white shadow-lg p-4 text-center max-w-6xl mx-auto">
    <!-- ロゴ画像を表示 -->
    <img src="@/assets/img/show_logo.png" alt="ショーロゴ" class="mx-auto h-16 mb-6" />
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