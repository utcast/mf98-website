<script setup lang="ts">
import { ref, computed } from 'vue'
import { useKikaku } from '@/composables/useKikaku'
import { useTickets } from '@/composables/useTickets'
import type { Schedule, ScheduleWithInfo } from '@/types/schedule'
import schedules from '@/static/json/schedule.json'
import ScheduleModal from '@/components/ScheduleModal.vue'

const { getKikaku } = useKikaku()
const { getTicketStatus } = useTickets()

// 基準を8:15に変更
const START_HOUR = 8
const START_MIN = 15
const END_HOUR = 18
const END_MIN = 15

const hours = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => i + START_HOUR)

// "nullなkikaku"はフィルターで排除する
const schedulesWithInfo = computed(() =>
  (schedules as Schedule[])
    .map((s) => {
      const kikakuInfo = getKikaku(s.kikaku)
      if (!kikakuInfo) return null
      return {
        ...s,
        kikakuInfo,
        ticketStatus: getTicketStatus(s.id)
      } as ScheduleWithInfo
    })
    .filter((s): s is ScheduleWithInfo => s !== null) // 型ガードを追加
)

const filteredSchedules = computed(() => {
  return [
    schedulesWithInfo.value.filter(s => s.day === 1 && s.channel === 'show'),
    schedulesWithInfo.value.filter(s => s.day === 1 && s.channel === 'atelier'),
    schedulesWithInfo.value.filter(s => s.day === 2 && s.channel === 'show'),
    schedulesWithInfo.value.filter(s => s.day === 2 && s.channel === 'atelier')
  ]
})

const calcPosition = (schedule: ScheduleWithInfo) => {
  const scheduleStartMinutes = schedule.startHour * 60 + schedule.startMin
  const baselineMinutes = START_HOUR * 60 + START_MIN
  return scheduleStartMinutes - baselineMinutes // 1分=1px
}

const calcHeight = (schedule: ScheduleWithInfo) => {
  const start = schedule.startHour * 60 + schedule.startMin
  const end = schedule.endHour * 60 + schedule.endMin
  return end - start
}

const modalSchedule = ref<ScheduleWithInfo | null>(null)

const openModal = (schedule: ScheduleWithInfo) => {
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
          <div v-for="hour in hours" :key="hour" class="absolute w-full border-t border-dotted border-gray-400 z-0" 
            :style="`top: ${(hour * 60 - START_HOUR * 60 - START_MIN)}px`">
          </div>

          <!-- extra 15分（18:15のline）
          <div class="absolute w-full border-t border-dotted border-gray-400 z-0" 
            :style="`top: ${(END_HOUR * 60 + END_MIN - START_HOUR * 60 - START_MIN)}px`">
          </div> -->

          <!-- schedule box -->
          <div
            v-for="schedule in colSchedules"
            :key="schedule.id"
            class="absolute z-10 bg-blue-500 text-white text-[10px] rounded p-1 shadow hover:bg-blue-600 cursor-pointer"
            :style="`top: ${calcPosition(schedule)}px; height: ${calcHeight(schedule)}px; left: 4px; right: 4px;`"
            @click="openModal(schedule)"
          >
            <div class="font-bold text-[9px]">{{ schedule.kikakuInfo.title_short }}</div>
            <div class="text-[8px]">{{ schedule.startHour }}:{{ ('0' + schedule.startMin).slice(-2) }} 〜 {{ schedule.endHour }}:{{ ('0' + schedule.endMin).slice(-2) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- モーダル -->
    <ScheduleModal
      v-if="modalSchedule"
      :schedule="modalSchedule"
      @close="modalSchedule = null"
    />
  </div>
</template>
