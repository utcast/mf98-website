<template>
  <div class="flex justify-center bg-gray-100">
    <div class="container flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg my-8">
      <h1>
        <T v="アクセス"></T>
      </h1>
      <div class="text-lg md:text-3xl my-1">
        <span class="text-sm md:text-base">5</span><span class="text-xs"><T v="[月](がつ)"></T></span>
        <span class="text-sm md:text-base ml-1">24</span><span class="text-xs"><T v="[日](にち)"></T></span>
        <span class="text-xs bg-blue-600 text-white mx-2 p-1 rounded">土</span>
        <font-awesome-icon class="mx-2 text-lg" :icon="['fas', 'caret-right']"></font-awesome-icon>
        <span class="text-sm md:text-base">25</span><span class="text-xs"><T v="[日](にち)"></T></span>
        <span class="text-xs bg-red-600 text-white mx-2 p-1 rounded">日</span>
      </div>
      <div>
        <T v="「なるほど[実感](じっかん)サイエンスアクセス」"></T>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import T from '~/components/T.vue'

library.add(faCaretRight)

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    T,
  },
}
</script>

<style scoped>
/* Tailwind CSSのユーティリティクラスを使用するため、スタイル設定は不要です */
</style>