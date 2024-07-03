// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {

    },
    private: {
      API_BASE_URL: process.env.API_URL+'/api' || '/api'
    }
  },

  modules: ['dayjs-nuxt', "@nuxt/image", "@nuxtjs/i18n"],

  i18n: {
    vueI18n: './langs/i18n.config.ts',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'langs/',
    lazy: false,
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'fr', file: 'fr/index.js', dir:'ltr' },
      { code: 'en', iso: 'en-US', name: 'en', file: 'en/index.js', dir:'ltr' }
    ]
  },
})
