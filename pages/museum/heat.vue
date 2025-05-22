<template>
  <div>
    <MuseumNav>
      <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto border-l border-r border-b">
        <div class="flex justify-center items-center space-x-4 my-3">
          <img src="@/assets/img/heat_logo.png" alt="熱ブースロゴ" class="object-contain h-11" />
          <h1 class="text-4xl font-bold text-center">
            <T :v="`[熱](ねつ)と[電気](でんき)ブース`" />
          </h1>
        </div>
        <div class="card-container flex flex-col items-center w-5/6 mx-auto">
          <Card v-for="(card, index) in filteredCards" :key="index" :title="card.title" :content="card.content" :img="card.img" class="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-all mx-auto p-6" />
        </div>
      </div>
    </MuseumNav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMuseumStore } from '~/stores/museumStore';
import Card from '~/components/card.vue';
import MuseumNav from '~/components/museumNav.vue';
import T from '~/components/T.vue';
import { useHead } from '#imports'

useHead({
  title: '東大CAST五月祭2025 | なるほど実感サイエンスミュージアム | 熱と電気ブース',
  meta: [
    { name: 'description', content: '家電製品、電子機器など私たちには不可欠な電気。このブースでは電気の温める/冷やすという側面に注目します。実験の鍵は”ペルチェ素子”という電子部品。 熱と電気の関係とは？ペルチェ素子とは？疑問に思った方は熱と電気ブースまで！' },
    { property: 'og:title', content: '東大CAST五月祭2025' },
    { property: 'og:description', content: '科学面白さを、多くの人に伝えたい。東大CASTが五月祭に出展！' },
    { property: 'og:image', content: 'https://ut-cast.net/mayfes2025/CAST_logo.png' },
    { property: 'og:url', content: 'https://ut-cast.net/mayfes2025/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

const museumStore = useMuseumStore();
const filteredCards = computed(() => museumStore.cards.filter(card => card.page === 'heat'));
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
}
</style>