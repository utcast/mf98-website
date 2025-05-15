<template>
  <footer style="background-color: #0168B7; width: 100%;">
    <div class="flex flex-col items-center md:flex-row md:justify-center">
      <nuxt-link to="/en" class="text-white mb-2 md:mb-0 md:mx-4">Home</nuxt-link>
      <a href="https://x.com/ut_cast?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4">Official X</a>
      <a href="https://www.instagram.com/ut_cast/" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4">Official Instagram</a>
      <a href="https://www.youtube.com/channel/UC6XSE6KzlpREBCT7PliIPnQ" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4">Official YouTube</a>
      <a href="https://gogatsusai.jp/98/visitor/" target="_blank" class="text-white mb-2 md:mb-0 md:mx-4">May Festival Official Site</a>
      <T v="&copy; UT CAST May Festival 2025" class="text-center text-white md:mx-4"></T>
    </div>
  </footer>
</template>

<script setup>
import T from '~/components/T.vue'
</script>

<style scoped>
footer {
  background-color: #0168B7; /* Set background color */
  padding: 1rem; /* Set padding */
}

a {
  color: #ffffff; /* Set link color to white */
  text-decoration: none; /* Remove link underline */
}

a:hover {
  text-decoration: underline; /* Underline link on hover */
}

.nuxt-link {
  color: #ffffff; /* Set Nuxt link color to white */
}

.text-white {
  color: #ffffff; /* Set text color to white */
}
</style>