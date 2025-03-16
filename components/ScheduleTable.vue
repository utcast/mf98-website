<template>
    <div class="grid gap-4 my-4">
      <div v-for="schedule in schedulesWithInfo" :key="schedule.id">
        <ScheduleUnit :schedule="schedule" @click="openModal(schedule)" />
      </div>
      <ScheduleModal v-if="modalSchedule" :schedule="modalSchedule" @close="modalSchedule = null" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useKikaku } from '@/composables/useKikaku'
  import { useTickets } from '@/composables/useTickets'
  import schedules from '@/static/json/schedule.json'
  
  const { getKikaku } = useKikaku()
  const { getTicketStatus } = useTickets()
  
  const schedulesWithInfo = computed(() =>
    schedules.map((s) => ({
      ...s,
      kikakuInfo: getKikaku(s.kikaku),
      ticketStatus: getTicketStatus(s.id)
    }))
  )
  
  const modalSchedule = ref<any | null>(null)
  
  const openModal = (schedule: any) => {
    modalSchedule.value = schedule
  }
  </script>
  