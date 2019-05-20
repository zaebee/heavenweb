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
      { property: 'og:image', content: 'https://heavenweb.me/opgraph.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,500,900' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 css: [
   '~/assets/css/fonts.css',
   '~/assets/css/transitions.css',
   '~/assets/css/buttons.css',
 ], // update this

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios', // add this
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '53731057',
        webvisor: true,
        clickmap:true,
        // useCDN:false,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ],
  ],

  // add this Axios object
  axios: {
    baseURL: "http://localhost:8000/api" // add this
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
