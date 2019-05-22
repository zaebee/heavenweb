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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,500,900' }
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

  // add this Axios object
  axios: {
    baseURL: "http://localhost:8000/api" // add this
  },
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
