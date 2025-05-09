<template>
    <div>
      <kimiSNav>
        <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto">
          <div class="flex justify-center items-center space-x-4 my-3">
            <h1 class="text-4xl font-bold text-center">君もSCをしてみよう</h1>
          </div>
          <div class="content-container flex flex-col items-center w-5/6 mx-auto">
            <p>ここにスプレッドシートから読み込んだ内容を表示します。</p>
            <div>
              <h2>当選番号一覧（{{ data?.path }}）</h2>
              <ul>
                <li v-for="num in data?.winners" :key="num">番号: {{ num }}</li>
              </ul>
            </div>
          </div>
        </div>
      </kimiSNav>
    </div>
</template>

<script setup>
import kimiSNav from '~/components/kimiSNav.vue'
const route = useRoute()

const path = route.path.split('/').pop()

const { data, pending, error } = await useFetch(
  'https://script.google.com/macros/s/AKfycbyNW75ocR_nLcIe2jFHUuhLWgwFhkp2APRq4l7V-ImB2GVulfQDwAVO1oI7NXnox8SE/exec',
  {
    params: { path },
    server: false,
  }
)
console.log("取得したデータ:", data)
</script>

<style scoped>
.content-container {
  display: flex;
  gap: 10px;
}
</style>