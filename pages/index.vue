<template>
  <div class="container">
    <h1> <ruby>東大 <rt>とうだい</rt></ruby> <ruby>CAST <rt>きゃすと</rt></ruby> <ruby>五月祭 <rt>ごがつさい</rt></ruby>2025</h1>
    <div class="text-lg md_text-3xl my-1">
      <span class="text-sm md_text-base">5</span><span class="text-xs">月</span
      ><span class="text-sm md_text-base ml-1">24</span><span class="text-xs">日</span
      ><span class="text-xs bg-blue-600 text-white mx-2 p-1 rounded">土</span>
      <font-awesome-icon class="mx-2 text-lg" :icon="['fas', 'caret-right']"></font-awesome-icon><span class="text-sm md_text-base">25</span
      ><span class="text-xs">日</span><span class="text-xs bg-red-600 text-white mx-2 p-1 rounded">日</span>
    </div>
    <div>
      「なるほど<ruby>実感<rt>じっかん</rt></ruby>サイエンスミュージアム」
      「なるほど <ruby>体感<rt>たいかん</rt></ruby>サイエンスショー」
      「<ruby>作<rt>つく</rt></ruby>って<ruby>体感<rt>たいかん</rt></ruby>サイエンスアトリエ」
      を出展しています！
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretRight)

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }//これ多分configの中に書いた方がいい
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

/* h1 {
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

h1 ruby rt {
  font-size: 0.5rem;
  color: gray;
}

.text-lg {
  font-size: 1.125rem;
  text-align: center;
} */

@media (min-width: 768px) {
  .md_text-3xl {
    font-size: 1.875rem;
  }
}

/* .my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.text-sm {
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .md_text-base {
    font-size: 1rem;
  }
}

.text-xs {
  font-size: 0.75rem;
}

.bg-red-600 {
  background-color: #e3342f;
}

.bg-blue-600 {
  background-color: #3490dc;
}

.text-white {
  color: #fff;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.p-1 {
  padding: 0.25rem;
}

.rounded {
  border-radius: 0.25rem;
} */
</style>