// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'dayjs-nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  compatibilityDate: '2024-11-01',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  imports: {
    dirs: ['data', 'modal']
  }
})