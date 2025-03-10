<template>
    <Header />
    <main>
        <slot />
    </main>
    <Kyosan /> <!-- ここに kyosan.vue のテンプレートを表示 -->
    <Footer />
</template>

<script>
imp~/components/layout/kyosan.vueonents/header.vue'
import Kyosan from '~/components/kyosan.vue' // kyosan.vue をインポート
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
    Kyosan, // kyosan コンポーネントを登録
    Footer
  }
}
</script>