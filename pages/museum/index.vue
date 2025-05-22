<template>
  <div>
    <img src="@/assets/img/loading_picture.png" alt="Loading...." class="object-contain h-11" />   
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useHead } from '#imports'

useHead({
  title: '東大CAST五月祭2025 | なるほど実感サイエンスミュージアム',
  meta: [
    { name: 'description', content: '東京大学五月祭にて，工学部2号館フォラムで熱と電気，文房具，服をテーマにしたブースを発表しております。その他様々な企画もございますのでぜひお越しください！' },
    { property: 'og:title', content: '東大CAST五月祭2025' },
    { property: 'og:description', content: '科学面白さを、多くの人に伝えたい。東大CASTが五月祭に出展！' },
    { property: 'og:image', content: 'https://ut-cast.net/mayfes2025/CAST_logo.png' },
    { property: 'og:url', content: 'https://ut-cast.net/mayfes2025/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

const router = useRouter();
router.replace({ name: 'museum-heat' });
</script>
