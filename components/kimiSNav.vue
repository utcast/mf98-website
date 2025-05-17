<template>
    <div class="museum-nav bg-white shadow-lg p-4 text-center max-w-6xl mx-auto">
      <!-- タイトル -->
      <h1 class="text-4xl font-bold text-center">君もSCをやってみよう</h1>
      <!-- 英語版へのリンク -->
      <nuxt-link to="/en/kimiS" class="text-blue-600 underline block my-4">
        English version of this page is here.
      </nuxt-link>
      <nav class="my-4 justify-center">
        <ul class="w-4/5 flex justify-center mx-auto">
          <li class="mr-5 bg-gray-50" :class="{ 'tab-active-li': tabActive === '1_1' }">
            <nuxt-link to="/kimiS/1_1" class="tab-youtube" :class="[tabActive === '1_1' ? 'tab-active' : 'tab-inactive']">
              <T v="[1日目](いちにちめ) [午前](ごぜん)" />
            </nuxt-link>
          </li>
          <li class="mr-5 bg-gray-50" :class="{ 'tab-active-li': tabActive === '1_2' }">
            <nuxt-link to="/kimiS/1_2" class="tab-youtube" :class="[tabActive === '1_2' ? 'tab-active' : 'tab-inactive']">
              <T v="[1日目](いちにちめ) [午後](ごご)" />
            </nuxt-link>
          </li>
          <li class="mr-5 bg-gray-50" :class="{ 'tab-active-li': tabActive === '2_1' }">
            <nuxt-link to="/kimiS/2_1" class="tab-youtube" :class="[tabActive === '2_1' ? 'tab-active' : 'tab-inactive']">
              <T v="[2日目](ふつかめ) [午前](ごぜん)" />
            </nuxt-link>
          </li>
          <li class="mr-5 bg-gray-50" :class="{ 'tab-active-li': tabActive === '2_2' }">
            <nuxt-link to="/kimiS/2_2" class="tab-youtube" :class="[tabActive === '2_2' ? 'tab-active' : 'tab-inactive']">
              <T v="[2日目](ふつかめ) [午後](ごご)" />
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
        if (this.$route.name.match(/1_1/)) {
          return '1_1';
        } else if (this.$route.name.match(/1_2/)) {
          return '1_2';
        } else if (this.$route.name.match(/2_1/)) {
          return '2_1';
        } else {
          return '2_2';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
  </style>