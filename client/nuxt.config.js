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
      { name: 'yandex-verification', content: '' },
      { name: 'google-site-verification', content: '' },
      { hid: 'description', name: 'description', content: 'Разработка одностраничных сайтов и сопровождение рекламных кампаний direct, adwords. Увеличиваем конверсии с помощью квизов, landing-page, чатботов и делаем, чтобы сайт работал на владельца бизнеса.' },
      { property: 'og:url', content: 'https://heavenweb.me' },
      { property: 'og:title', content: 'Heavenweb - команда разработки сайтов и рекламного продвижения.' },
      { hid: 'og:description', property: 'og:description', content: 'Разработка одностраничных сайтов и сопровождение рекламных кампаний direct, adwords. Увеличиваем конверсии с помощью квизов и делаем, что сайт работал на владельца бизнеса.' },
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
    { src: '~plugins/scroll', ssr: true },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // '@nuxtjs/dotenv',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module',
    // [
    //   '@nuxtjs/google-tag-manager', {
    //     id: 'GTM-W7SD7X3'
    //   }
    // ],
    [
      '@nuxtjs/yandex-metrika', {
        id: '53731057',
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
    dialogflowApiKey: process.env.DIALOGFLOW_API_KEY || '02941f64654840a98378d7f0cfc33979',
    baseURL: process.env.API_URL || 'http://localhost:8000/api',
    filestackApiKey: process.env.FILESTACK_API_KEY || 'A3lXl09sRSejY4e0pOOSQz',
    facebookAppId: process.env.FACEBOOK_APP_ID || '318731445375934',
    yandexMapsKey: process.env.YANDEX_MAPS_KEY || '28a17595-ef93-4576-bd46-42eee945d1cb',
    METRO_JSON: process.env.METRO_JSON || 'http://localhost:8000/static/metro.json',

    chat: {
      // enter your gateway URL here, the function is just a helper
      // function for my cloud integration. You don't normally need it
      gateway: "https://dialogflow-web-v2.gateway.dialogflow.cloud.ushakov.co",
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
  sentry: {
    dsn: process.env.FRONTEND_SENTRY_DSN,
    release: process.env.GIT_REV || null,
    environment: process.env.NODE_ENV || 'development',
  },
  markdownit: {
    injected: true
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
      facebook: {
        client_id: process.env.FACEBOOK_APP_ID || '318731445375934',
        userinfo_endpoint: 'https://graph.facebook.com/v3.1/me?fields=about,short_name,first_name,last_name,name,picture{url},email',
        authorization_endpoint: 'https://facebook.com/v3.1/dialog/oauth',
        scope: ['public_profile', 'email'],
        // redirect_uri: `${process.env.BASE_URL || 'http://localhost:3000'}/callback`,
      },
      local: {
        endpoints: {
          login: { propertyName: 'token' }
        }
      },
    },
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
      '/recipes/add',
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
