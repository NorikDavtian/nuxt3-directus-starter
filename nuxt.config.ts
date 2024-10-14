export default defineNuxtConfig({
  // https://v3.nuxtjs.org/guide/directory-structure/nuxt.config/

  // As of RC12 Nuxt 3 supports Hybrid rendering mode
  // https://v3.nuxtjs.org/guide/concepts/rendering#route-rules
  //   routeRules: {
  //     '/pages/**': { swr: true },
  //     '/posts/**': { static: true },
  //   },
  ssr: false,
  css: [],
  devtools: {enabled: false},
  security: {
    headers: {
      crossOriginResourcePolicy: false,
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'script-src': [
          "'self'", // Fallback value, will be ignored by most modern browsers (level 3)
          "http:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-eval'", // Fallback value, will be ignored by almost any browser (level 2)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'", // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
          "localhost", "7mwo.com", "*.7mwo.com", "*.youtube.com", "*.youtube-nocookie.com", "*.x.com"
        ],
        'style-src': [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'" // Recommended default for most Nuxt apps
        ],
        'base-uri': ["'none'"],
        'img-src': ["'self'", "https:", "7mwo.com", "*.7mwo.com", "*.youtube.com", "*.x.com"], // Add relevant https://... sources if you load images from external sources
        'default-src': ["'self'", "http:", "localhost", "*.7mwo.com", "*.youtube.com", "*.x.com"], // Add relevant https://... sources if you load images from external sources
        'frame-src': ["7mwo.com", "*.7mwo.com", "*.youtube.com", "*.youtube-nocookie.com", "*.x.com"], // Add relevant https://... sources if you load images from external sources
        'font-src': ["'self'", "https:", "data:"], //  For increased security, replace by the specific sources for fonts
        'upgrade-insecure-requests': false
      }
    },
  },

  plugins: [
    '~/plugins/posthog.client',
    '~/plugins/prism'
  ],

  routeRules: {
    '/ingest/static/**': {proxy: 'https://us-assets.i.posthog.com/static/**'},
    '/ingest/**': {proxy: 'https://us.i.posthog.com/**'},
  },

  modules: [
    '@nuxtjs/tailwindcss',
    // https://pinia.esm.dev
    '@pinia/nuxt',
    // https://vueuse.org/
    '@vueuse/nuxt',
    "@nuxt/image",
    "nuxt-security"
  ],
  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      posthogReverseProxyHost: "/ingest", // reverse proxy via NUXT
      posthogHost: 'https://us.i.posthog.com'
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-09-11",
})