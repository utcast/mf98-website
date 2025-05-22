<template>
  <div>
    <MuseumNav>
      <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto border-l border-r border-">
        <div class="flex justify-center items-center space-x-4 my-3">
          <img src="@/assets/img/clothes_logo.png" alt="服ブースロゴ" class="object-contain h-11" />
          <h1 class="text-4xl font-bold text-center">
            <T :v="`[服](ふく)ブース`" />
          </h1>
        </div>
          <div class="card-container flex flex-col items-center w-5/6 mx-auto">
            <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-all mx-auto p-6" />
          </div>
      </div>
    </MuseumNav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMuseumStore } from '~/stores/museumStore'
import Card from '~/components/card.vue'
import MuseumNav from '~/components/museumNav.vue'
import T from '~/components/T.vue'
import { useHead } from '#imports'

useHead({
  title: '東大CAST五月祭2025 | なるほど実感サイエンスミュージアム | 服ブース',
  meta: [
    { name: 'description', content: '服には、汗を吸収してくれるもの、紫外線をカットしてくれるものなど様々なものがあると思います。では、これらの服の性質はどこからきているのでしょうか？このブースではそんな服の仕組みについて実験を通して説明していきます。' },
    { property: 'og:title', content: '東大CAST五月祭2025' },
    { property: 'og:description', content: '科学面白さを、多くの人に伝えたい。東大CASTが五月祭に出展！' },
    { property: 'og:image', content: 'https://ut-cast.net/mayfes2025/CAST_logo.png' },
    { property: 'og:url', content: 'https://ut-cast.net/mayfes2025/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

const museumStore = useMuseumStore()
const filteredCards = computed(() => museumStore.cards.filter(card => card.page === 'clothes'))
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>