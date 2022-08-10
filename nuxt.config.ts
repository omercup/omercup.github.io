import type { NuxtConfig } from "@nuxt/types"

const Config: NuxtConfig = {
  target: "static",
  ssr: process.env.NODE_ENV !== "development", // For vite

  head: {
    title: "omercup",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Montserrat:wght@500&display=swap"
      }
    ]
  },

  components: true,
  modules: ["@nuxt/http"],
  css: ["@/assets/styles/main"],
  plugins: ["@/plugins/iconify", "@/plugins/vue-lanyard"],
  buildModules: ["nuxt-vite", "@nuxt/image", "@nuxt/typescript-build"],

  vite: {
    ssr: false,
    build: false,
    experimentWarning: false
  },

  image: {
    domains: ["raw.githubusercontent.com"]
  }
}

export default Config
