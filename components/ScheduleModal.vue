<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-4 rounded w-96 relative">
        <button class="absolute top-2 right-2 text-red-500" @click="$emit('close')">✕</button>
        <div class="text-center mb-4">
          <Icon :icon="schedule.kikakuInfo.icon" class="text-3xl mb-2" />
          <h3 class="text-lg font-bold">{{ schedule.kikakuInfo.title }}</h3>
          <p class="text-sm text-gray-600">{{ schedule.kikakuInfo.description }}</p>
        </div>
        <div v-if="schedule.channel === 'atelier'" class="text-sm font-bold text-center text-gray-800">
          整理券: {{ schedule.ticketStatus.reserved }}/{{ schedule.ticketStatus.limit }}枚
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ schedule: any }>()
  </script>
  