<template>
    <div class="cursor-pointer p-2 border" @click="$emit('click')">
      <div class="flex items-center">
        <Icon :icon="schedule.kikakuInfo.icon" class="mr-2" />
        <div>
          <div class="font-bold">{{ schedule.kikakuInfo.title_short }}</div>
          <div class="text-xs text-gray-600">{{ schedule.startHour }}:{{ ('0' + schedule.startMin).slice(-2) }}〜{{ schedule.endHour }}:{{ ('0' + schedule.endMin).slice(-2) }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ schedule: any }>()
  </script>
  