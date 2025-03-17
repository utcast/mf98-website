<template>
  <div :class="['triangle-wrapper', positionClass]">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'left', // デフォルトは左上
    validator: value => ['left', 'right'].includes(value)
  }
})

const positionClass = computed(() => {
  return props.position === 'right' ? 'triangle-right' : 'triangle-left'
})
</script>

<style scoped>
.triangle-wrapper {
  width: 250px;
  height: 250px;
  position: relative;
  background: transparent;
}

/* 左上に直角が来る三角形 */
.triangle-left::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-left: 250px solid #96CBDF;
  border-bottom: 250px solid transparent;
  top: 0;
  left: 0;
}

/* 右上に直角が来る三角形 */
.triangle-right::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-right: 250px solid #96CBDF;
  border-bottom: 250px solid transparent;
  top: 0;
  right: 0;
}

/* 文字はtriangle-wrapper内で自由に配置 */
.title {
  position: absolute;
  top: 20px;
  left: 20px;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
</style>
