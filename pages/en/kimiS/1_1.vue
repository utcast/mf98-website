<template>
  <div>
    <kimiSNav>
      <div class="tab_museum w-4/5 bg-gray-50 p-6 shadow-md mx-auto">
        <div class="flex justify-center items-center space-x-4 my-3">
          <h1 class="text-4xl font-bold text-center">Let's do science communication with us!</h1>
        </div>
        <div class="content-container flex flex-col items-center w-5/6 mx-auto">
          <div>
            <h2>List of Winning Numbers（{{ data?.path }}）</h2>
            <ul>
              <li v-for="num in data?.winners" :key="num">Number: {{ num }}</li>
            </ul>
          </div>
        </div>
      </div>
    </kimiSNav>
  </div>
</template>

<script setup>
import kimiSNav from '~/components/en/kimiSNav.vue'
const route = useRoute()

const path = route.path.split('/').pop()

const { data, pending, error } = await useFetch(
'https://script.google.com/macros/s/AKfycbx0rC51Ph4MXYEhwD6YAKevhGNzgQ-gNvSQ2RQKOrMv6teHDoLibfFhWmldmf0kX-8E/exec',
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