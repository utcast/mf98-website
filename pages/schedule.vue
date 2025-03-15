<template>
    <div class="container mx-auto p-4">
      <!-- 日付の切り替えボタン -->
      <div class="flex justify-center space-x-4 mb-4">
        <button 
          v-for="day in ['24', '25']" 
          :key="day"
          @click="selectedDay = day"
          class="px-4 py-2 border rounded"
          :class="{ 'bg-blue-500 text-white': selectedDay === day }"
        >
          {{ day }}日
        </button>
      </div>
  
      <!-- スケジュール表示 -->
      <div class="overflow-x-auto">
        <div class="relative w-full max-w-4xl mx-auto">
          <!-- 時間のガイドライン -->
          <div class="absolute top-0 left-0 w-full">
            <div 
              v-for="hour in hours" 
              :key="hour" 
              class="absolute w-full border-t border-dashed border-gray-400"
              :style="{ top: hourToPixels(hour) + 'px' }"
            >
              <span class="absolute -left-12 text-sm">{{ hour }}:00</span>
            </div>
          </div>
  
          <!-- イベント -->
          <div class="relative">
            <div 
              v-for="event in schedule[selectedDay]" 
              :key="event.id"
              class="absolute w-1/2 bg-blue-200 p-2 rounded shadow cursor-pointer"
              :class="event.type === 'ショー' ? 'bg-green-300' : 'bg-yellow-300'"
              :style="{
                top: eventTop(event.start) + 'px',
                height: eventHeight(event.start, event.end) + 'px'
              }"
              @click="showPopup(event)"
            >
              {{ event.title }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- ポップアップ -->
      <div v-if="selectedEvent" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded shadow-lg max-w-md text-center">
          <h2 class="text-xl font-bold">{{ selectedEvent.title }}</h2>
          <img :src="selectedEvent.image" class="my-4 w-full h-40 object-cover">
          <p>{{ selectedEvent.description }}</p>
          <button @click="selectedEvent = null" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">閉じる</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { scheduleData } from '../data/schedule.js';
  
  const selectedDay = ref("24");
  const selectedEvent = ref(null);
  const hours = Array.from({ length: 10 }, (_, i) => i + 9); // 9:00 - 18:00
  
  const schedule = ref(scheduleData);
  
  const hourToPixels = (hour) => (hour - 9) * 60; // 1時間60px
  const eventTop = (time) => {
    const [h, m] = time.split(":").map(Number);
    return (h - 9) * 60 + (m / 60) * 60;
  };
  const eventHeight = (start, end) => {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    return ((eh - sh) * 60 + (em - sm));
  };
  
  const showPopup = (event) => {
    selectedEvent.value = event;
  };
  </script>
  
  <style scoped>
  .container {
    min-height: 600px;
    position: relative;
  }
  </style>
  