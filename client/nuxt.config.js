const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:description', property: 'og:description', content: pkg.desc},
      { name: 'yandex-verification', content: '' },
      { name: 'google-site-verification', content: '' },
      { property: 'og:url', content: 'https://heavenweb.me' },
      { property: 'og:title', content: 'Heavenweb - команда разработки сайтов и рекламного продвижения.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://heavenweb.me/graph.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,500,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik&display=swap' }
    ],
    script: [
      // TODO use process.env.QUIZ
      { src: '//script.marquiz.ru/v1.js' },
    ]

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7DADB7' },

  /*
  ** Global CSS
  */
 css: [
   '~/assets/css/queries.scss',
   '~/assets/css/fonts.scss',
   '~/assets/css/transitions.scss',
   '~/assets/css/buttons.scss',
 ], // update this

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/scroll', ssr: false },
    { src: '~plugins/goals', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module',
    // [
    //   '@nuxtjs/google-tag-manager', {
    //     id: ''
    //   }
    // ],
    [
      '@nuxtjs/yandex-metrika', {
        id: process.env.YA_METRIKA || '53731057',
        webvisor: true,
        clickmap: true,
        // useCDN:false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  env: {
    environment: process.env.NODE_ENV || 'development',
    baseURL: process.env.API_URL || 'http://localhost:8000/api',
    filestackApiKey: process.env.FILESTACK_API_KEY || 'A3lXl09sRSejY4e0pOOSQz',
    facebookAppId: process.env.FACEBOOK_APP_ID || '318731445375934',
    yandexMapsKey: process.env.YANDEX_MAPS_KEY || '28a17595-ef93-4576-bd46-42eee945d1cb',
    METRO_JSON: process.env.METRO_JSON || '/static/metro.json',

    chat: {
      // enter your gateway URL here, the function is just a helper
      // function for my cloud integration. You don't normally need it
      gateway: "https://dialogflow-web-v2.gateway.dialogflow.cloud.ushakov.co",
      // gateway: "http://api.heavenweb.me/api/dialogs/",
      // mute microphone at start
      muted: false,
      // array of suggestions, displayed at the start screen
      start_suggestions: [],
      // fallback language code, if history mode or network is unavailable
      fallback_lang: 'ru'
    },
  },
  axios: {
    timeout: 30000,
    baseURL: process.env.API_URL || 'http://localhost:8000/api',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    xsrfCookieName: 'csrf-token',
    xsrfHeaderName: 'X-CSRFToken'
  },
  auth: {
    // middleware: false,
    // plugins: [{ src: '~/plugins/auth.js' }],
    redirect: {
      login: '/login',
      callback: '/callback',
      home: '/profile'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'token-auth/', method: 'post', propertyName: 'token' },
          user: { url: 'rest-auth/user/', method: 'get', propertyName: false },
          logout: { url: 'rest-auth/logout/' }
        },
        tokenRequired: true,
        tokenType: 'JWT'
      },
    }
  },
  sentry: {
    dsn: process.env.FRONTEND_SENTRY_DSN,
    release: process.env.GIT_REV || null,
    environment: process.env.NODE_ENV || 'development',
  },
  markdownit: {
    injected: true
  },
  serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl',
  ],
  sitemap: {
    hostname: 'https://heavenweb.me',
    gzip: true,
    exclude: [
      '/admin/**',
      '/login',
      '/register',
    ],
    routes: [
      '/',
      {
        url: '/projects',
        changefreq: 'daily',
        priority: 1,
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    optimizeCSS: true,
    extend(config, ctx) {
    }
  }
}
