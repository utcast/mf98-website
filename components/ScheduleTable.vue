<script setup lang="ts">
import { ref, computed } from 'vue'
import { useKikaku } from '@/composables/useKikaku'
import { useTickets } from '@/composables/useTickets'
import schedules from '@/static/json/schedule.json'
import ScheduleModal from '@/components/ScheduleModal.vue'

const { getKikaku } = useKikaku()
const { getTicketStatus } = useTickets()

const hours = Array.from({ length: 9 }, (_, i) => i + 9)

const schedulesWithInfo = computed(() =>
  schedules.map((s) => ({
    ...s,
    kikakuInfo: getKikaku(s.kikaku) || {}, // fallback追加
    ticketStatus: getTicketStatus(s.id)
  }))
)

const filteredSchedules = computed(() => {
  return [
    schedulesWithInfo.value.filter(s => s.day === 1 && s.channel === 'show'),
    schedulesWithInfo.value.filter(s => s.day === 1 && s.channel === 'atelier'),
    schedulesWithInfo.value.filter(s => s.day === 2 && s.channel === 'show'),
    schedulesWithInfo.value.filter(s => s.day === 2 && s.channel === 'atelier')
  ]
})

const calcPosition = (schedule: any) => {
  const minutes = (schedule.startHour * 60 + schedule.startMin) - (9 * 60)
  return minutes
}

const calcHeight = (schedule: any) => {
  const start = schedule.startHour * 60 + schedule.startMin
  const end = schedule.endHour * 60 + schedule.endMin
  return end - start
}

const modalSchedule = ref<any | null>(null)

const openModal = (schedule: any) => {
  modalSchedule.value = schedule
}
</script>

<template>
  <div class="overflow-x-auto">
    <div class="min-w-[800px] overflow-y-auto border" style="height: 800px;">
      <div class="grid" :style="`grid-template-columns: 80px repeat(4, 1fr)`">

        <!-- 時間軸 -->
        <div class="relative">
          <div v-for="hour in hours" :key="hour" class="h-[60px] relative">
            <div class="absolute top-0 text-xs text-right pr-2" style="top: -6px;">
              {{ hour }}:00
            </div>
          </div>
        </div>

        <!-- 4カラム -->
        <div
          v-for="(colSchedules, colIndex) in filteredSchedules"
          :key="colIndex"
          class="relative border-l border-gray-300 bg-white"
        >
          <!-- dotted lines -->
          <div v-for="hour in hours" :key="hour" class="absolute w-full border-t border-dotted border-gray-400 z-0" :style="`top: ${(hour - 9) * 60}px`"></div>

          <!-- schedule box -->
          <div
            v-for="schedule in colSchedules"
            :key="schedule.id"
            v-if="schedule.kikakuInfo && schedule.kikakuInfo.title_short"
            class="absolute z-10 bg-blue-500 text-white text-xs rounded p-1 shadow hover:bg-blue-600 cursor-pointer"
            :style="`top: ${calcPosition(schedule)}px; height: ${calcHeight(schedule)}px; left: 4px; right: 4px;`"
            @click="openModal(schedule)"
          >
            <div class="font-bold">{{ schedule.kikakuInfo.title_short }}</div>
            <div class="text-[10px]">{{ schedule.startHour }}:{{ ('0' + schedule.startMin).slice(-2) }} 〜 {{ schedule.endHour }}:{{ ('0' + schedule.endMin).slice(-2) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- モーダル -->
    <ScheduleModal
      v-if="modalSchedule && modalSchedule.kikakuInfo && modalSchedule.kikakuInfo.title"
      :schedule="modalSchedule"
      @close="modalSchedule = null"
    />
  </div>
</template>
