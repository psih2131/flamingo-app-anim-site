// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {

    },
    private: {
      API_BASE_URL: process.env.API_URL + '/api' || '/api'
    }
  },
  routeRules: {
    '/tests': { ssr: false },
    '/tests-city-tax': { ssr: false },
  },

  modules: ['dayjs-nuxt', "@nuxt/image", "@nuxtjs/i18n", '@vueuse/nuxt'],

  i18n: {
    vueI18n: './langs/i18n.config.ts',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'langs/',
    lazy: false,
    locales: [
      // { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr/index.js', dir:'ltr' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en/index.js', dir: 'ltr' },
      // { code: 'ar', iso: 'ar-AE', name: ' العربية', file: 'ar/Flamingo App Website_En_Final_AR.js', dir:'rtl' },
      // { code: 'cn', iso: 'zh-CN', name: '中文', file: 'cn/Flamingo App Website_En_Final_CN.js', dir:'ltr' },
      { code: 'sp', iso: 'es-ES', name: 'Español', file: 'sp/Flamingo App Website_En_Final_ES.js', dir: 'ltr' },
      { code: 'pt', iso: 'pt-PT', name: 'Português', file: 'pt/Flamingo App Website_En_Final_PT.js', dir: 'ltr' },
    ]
  },
})


