// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s - 東大CAST五月祭2025特設ページ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'description', name: 'description', content: description },
        { hid: 'og:site_name', property: 'og:site_name', content: '東大CAST五月祭2025特設サイト' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://ut-cast.net/mayfes2025' },
        // { hid: 'og:image', property: 'og:image', content: 'https://ut-cast.net/mayfes2021/mf-ogp.jpg' },
        { hid: 'og:title', property: 'og:title', content: '東大CAST五月祭2025特設サイト' },
        // { hid: 'og:description', property: 'og:description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ut_cast' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://ut-cast.net/favicon.ico' }]
    }
  }
})

