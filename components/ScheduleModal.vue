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
      <div 
        v-if="schedule.channel === 'atelier'" 
        class="text-sm font-bold text-center" 
        :class="{
          'line-through text-gray-500': schedule.ticketStatus.reserved === 0,
          'text-red-500': schedule.ticketStatus.reserved >= 1 && schedule.ticketStatus.reserved <= 5,
          'text-gray-800': schedule.ticketStatus.reserved > 5
        }"
      >
        <T :v="`整理券残り: ${schedule.ticketStatus.reserved}/${schedule.ticketStatus.limit}枚`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import T from '@/components/T.vue'
defineProps<{ schedule: any }>()
</script>
