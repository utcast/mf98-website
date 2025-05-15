<template>
  <div class="container mx-auto px-4 py-6">
    <!-- ページタイトル -->
    <h1 class="text-3xl font-bold text-center mb-4">Time Schedule</h1>

    <!-- スケジュールテーブル -->
    <ScheduleTable />

  </div>
</template>

<script setup lang="ts">
import { useKikaku } from '@/composables/useKikaku'
import ScheduleTable from '@/components/en/ScheduleTable.vue'

// SEO設定
useHead({
  title: 'Schedule | Mayfes 2025',
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
