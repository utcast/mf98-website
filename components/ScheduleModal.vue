<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" v-if="schedule.kikakuInfo">
    <div class="bg-white p-4 rounded w-96 relative">
      <button class="absolute top-2 right-2 text-red-500" @click="$emit('close')">✕</button>
      <div class="text-center mb-4">
        <Icon :icon="schedule.kikakuInfo.icon" class="text-3xl mb-2" />
        <h3 
          class="text-lg font-bold" 
          :class="{
            'line-through text-gray-500': schedule.channel === 'atelier' && schedule.ticketStatus.reserved === 0
          }"
        >
          <T :v="schedule.kikakuInfo.title" />
        </h3>
        <p 
          class="text-sm" 
          :class="{
            'line-through text-gray-500': schedule.channel === 'atelier' && schedule.ticketStatus.reserved === 0,
            'text-gray-600': !(schedule.channel === 'atelier' && schedule.ticketStatus.reserved === 0)
          }"
        >
          <T :v="schedule.kikakuInfo.description" />
        </p>
      </div>

      <!-- 整理券配布・整列情報 -->
      <div v-if="schedule.channel === 'atelier'" class="text-sm text-center text-gray-600 mb-2">
        <div v-if="schedule.ticketDistHour !== undefined && schedule.ticketDistMin !== undefined">
          整理券配布開始: {{ formatTime(schedule.ticketDistHour, schedule.ticketDistMin) }}
        </div>
        <div v-if="schedule.lineUpHour !== undefined && schedule.lineUpMin !== undefined">
          整列可能: {{ formatTime(schedule.lineUpHour, schedule.lineUpMin) }}
        </div>
      </div>

      <div 
        v-if="schedule.channel === 'atelier'" 
        class="text-sm font-bold text-center"
      >
        <div v-if="schedule.ticketStatus.limit === 0" class="text-gray-500">
          loading...
        </div>
        <div 
          v-else 
          :class="{
            'line-through text-gray-500': schedule.ticketStatus.reserved === 0,
            'text-red-500': schedule.ticketStatus.reserved >= 1 && schedule.ticketStatus.reserved <= 5,
            'text-gray-800': schedule.ticketStatus.reserved > 5
          }"
        >
          <T :v="`[整理券残](せいりけんのこ)り: ${schedule.ticketStatus.reserved}/${schedule.ticketStatus.limit}枚`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import T from '@/components/T.vue'

defineProps<{ schedule: any }>()

function formatTime(hour: number, min: number): string {
  const h = String(hour).padStart(2, '0')
  const m = String(min).padStart(2, '0')
  return `${h}:${m}`
}
</script>
