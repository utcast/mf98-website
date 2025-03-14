<template>
  <Header />
  <main>
    <slot />
  </main>
  <component :is="kyosanComponent" /> <!-- 動的にコンポーネントを切り替える -->
  <Footer />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/header.vue'
import KyosanAll from '~/components/kyosan_all.vue' // kyosan_all.vue をインポート
import KyosanRand from '~/components/kyosan_rand.vue' // kyosan_rand.vue をインポート
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute()
    const kyosanComponent = computed(() => {
      return route.path === '/' ? KyosanAll : KyosanRand
    })

    return {
      kyosanComponent
    }
  }
}
</script>