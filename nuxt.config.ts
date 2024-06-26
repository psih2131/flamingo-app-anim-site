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

  modules: ['dayjs-nuxt', "@nuxt/image"]
})