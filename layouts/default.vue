<template>
  <component :is="HeaderComp" />
  <main class="default-background">
    <slot />
  </main>
  <!-- Use KyosanAll for the home page, otherwise use KyosanRand -->
  <component :is="kyosanComponent" />
  <!-- Conditionally selected footer -->
  <component :is="FooterComp" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Import Header components (language-specific)
import HeaderJa from '~/components/header.vue'
import HeaderEn from '~/components/en/header.vue'

// Import Kyosan components
import KyosanAllJa from '~/components/kyosan_all.vue'
import KyosanAllEn from '~/components/en/kyosan_all.vue'
import KyosanRand from '~/components/kyosan_rand.vue'

// Import Footer components (language-specific)
import FooterJa from '~/components/footer.vue'
import FooterEn from '~/components/en/footer.vue'

export default {
  setup() {
    const route = useRoute()
    const isEnglish = computed(() => route.path.includes('/en'))
    
    // Select the proper Header component based on the URL.
    const HeaderComp = computed(() => isEnglish.value ? HeaderEn : HeaderJa)
    
    // Use KyosanAll for home page; choose language-specific KyosanAll based on the URL.
    const kyosanComponent = computed(() => {
      const isHome = route.path === '/' || route.path === '/en' || route.path === '/en/'
      if (isHome) {
        return isEnglish.value ? KyosanAllEn : KyosanAllJa
      }
      return KyosanRand
    })
    
    // Conditionally select the Footer component.
    const FooterComp = computed(() => isEnglish.value ? FooterEn : FooterJa)
    
    return {
      HeaderComp,
      kyosanComponent,
      FooterComp
    }
  }
}
</script>

<style scoped>
.default-background {
  background-color: #D9EFFF;
  width: 100%;
  height: 100%;
}
</style>