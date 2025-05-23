<template>
  <div class="container mx-auto px-4 py-6">
    <!-- ページタイトル -->
    <h1 class="text-3xl font-bold text-center mb-4">タイムスケジュール</h1>
    <p>アトリエの整理券状況を各回の枠をタップすることで確認できます。<br>
      ページを更新していない場合、最新の状態でない場合がございます。ページを更新の上ご確認ください。</p>
    <!-- スケジュールテーブル -->
    <ScheduleTable />

  </div>
</template>

<script setup lang="ts">
import { useKikaku } from '@/composables/useKikaku'
import ScheduleTable from '@/components/ScheduleTable.vue'

// SEO設定
useHead({
  title: 'タイムスケジュール',
  meta: [
    {
      name: 'description',
      content: '東京大学の学園祭「五月祭」の特設ページです！'
    },
    {
      property: 'og:description',
      content: '東京大学の学園祭「五月祭」の特設ページです！'
    },
    {
      property: 'og:url',
      content: 'https://ut-cast.net/mayfes2025/schedule'
    }
  ]
})

const { getKikaku } = useKikaku()
const getColor = () => {
  const live = getKikaku('kaiten') // 例:回転ショーの色など任意で取得
  return live?.color || 'main'
}
</script>
