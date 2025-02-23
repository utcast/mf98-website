<template>
  <div class="container">
    <h1>
      <T v="[東大](とうだい) [CAST](きゃすと) [五月祭](ごがつさい)2025"></T>
    </h1>
    <div class="text-lg md_text-3xl my-1">
      <span class="text-sm md_text-base">5</span><span class="text-xs"><T v="[月](がつ)"></T></span>
      <span class="text-sm md_text-base ml-1">24</span><span class="text-xs"><T v="[日](にち)"></T></span>
      <span class="text-xs bg-blue-600 text-white mx-2 p-1 rounded">土</span>
      <font-awesome-icon class="mx-2 text-lg" :icon="['fas', 'caret-right']"></font-awesome-icon>
      <span class="text-sm md_text-base">25</span><span class="text-xs"><T v="[日](にち)"></T></span>
      <span class="text-xs bg-red-600 text-white mx-2 p-1 rounded">日</span>
    </div>
    <div>
      <T v="「なるほど[実感](じっかん)サイエンスミュージアム」"></T>
      <T v="「なるほど[体感](たいかん)サイエンスショー」"></T>
      <T v="「[作](つく)って[体感](たいかん)サイエンスアトリエ」"></T>
      <T v ="を[出展](しゅってん)しています！"></T>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0; 
}

@media (min-width: 768px) {
  .md_text-3xl {
    font-size: 1.875rem;
  }
}
</style>