export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  devServer: {
    port: 3001,
  },

  modules: ["@pinia/nuxt", "@vite-pwa/nuxt", "nuxt-vuefire"],
  css: ["/assets/index.scss"],
  imports: {
    presets: [
      { from: "@pinia/nuxt", imports: ["defineStore"] },
      {
        from: "easy-kit-utils",
        imports: [
          "isBlankArray",
          "isArray",
          "isNull",
          "isUndefined",
          "isEmptyString",
          "isTrue",
          "isMajorNumber",
          "isMajorSameNumber",
          "isMinorNumber",
          "isMinorSameNumber",
        ],
      },
    ],
  },

  pwa: {
    manifest: {
      name: "Dev.tool",
      short_name: "Dev.tool",
      description: "Simple tool for monitoring data from dev.to 🤝",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-144x144.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "pwa-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "pwa-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/pages/index.vue",
    },
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: false,
    },
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      settingsCollection: process.env.FIREBASE_SETTINGS_COLLECTION,
    },
  },
});
