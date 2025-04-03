<template>
    <div>
      <kimiSNav>
        <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto">
          <div class="flex justify-center items-center space-x-4 my-3">
            <h1 class="text-4xl font-bold text-center">君もSCをしてみよう</h1>
          </div>
          <div class="content-container flex flex-col items-center w-5/6 mx-auto">
            <p>ここにスプレッドシートから読み込んだ内容を表示します。</p>
          </div>
        </div>
      </kimiSNav>
    </div>
</template>

<script setup>
import kimiSNav from '~/components/kimiSNav.vue';
</script>

<style scoped>
.content-container {
  display: flex;
  gap: 10px;
}
</style>