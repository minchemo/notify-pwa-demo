// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // <link rel="manifest" href="/manifest.webmanifest" />
    head: {
      link: [
        {
          rel: "manifest",
          href: "/manifest.webmanifest"
        }
      ]
    }
  },
  nitro: {
    plugins: [
      '@/server/index'
    ]
  },
  devtools: { enabled: true }
})
