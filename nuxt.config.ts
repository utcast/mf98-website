// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  telemetry: false, // Telemetry を無効化

  app: {
    baseURL: process.env.NUXT_BASE_URL || "/",    
    head: {
      titleTemplate: '%s - 東大CAST五月祭2025特設ページ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: '東大CAST五月祭2025特設サイト' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ut-cast.net/mayfes2025' },
        { property: 'og:title', content: '東大CAST五月祭2025特設サイト' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ut_cast' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://ut-cast.net/favicon.ico' }]
    },
    // ページトランジションの設定を追加
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  // Tailwind CSS の設定を追加
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: 'static', // 静的サイト生成を有効化
    publicAssets: [
      {
        baseURL: '/public',
        dir: 'public'
      }
    ]
  },

  // Viteの設定を追加
  vite: {
    resolve: {
      alias: {
        // 必要に応じてエイリアスを追加
      }
    }
  }
})
