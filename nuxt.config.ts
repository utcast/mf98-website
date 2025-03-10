// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: process.env.NUXT_BASE_URL || "/",    
    head: {
      titleTemplate: '%s - 東大CAST五月祭2025特設ページ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:site_name', property: 'og:site_name', content: '東大CAST五月祭2025特設サイト' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://ut-cast.net/mayfes2025' },
        { hid: 'og:title', property: 'og:title', content: '東大CAST五月祭2025特設サイト' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ut_cast' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://ut-cast.net/favicon.ico' }]
    }
  },

  // Tailwind CSS の設定を追加
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: 'static', // 静的サイト生成を有効化
  }
})