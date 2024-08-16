export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  modules: ["@pinia/nuxt", "@vite-pwa/nuxt"],
  css:["/assets/index.scss"],
  //css: ["/node_modules/bulma/css/versions/bulma-no-dark-mode.min.css"],
  //  css: ["/node_modules/bulma/css/bulma.min.css"],
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
  runtimeConfig: {
    public: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      appCollection: process.env.FIREBASE_APP_COLLECTION,
    },
  },
});
