const ENV = process.env.ENV || 'development'
const config = {
  staging: {
    dotenv: '.env/staging'
  },
  development: {
    dotenv: '.env/development'
  } 
}
require('dotenv').config({ path: config[ENV]['dotenv'] })

export default {
  mode: 'spa',
  srcDir: 'app',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],
  /* Env */
  env: {
    AUTH_DOMAIN: process.env.AUTH_DOMAIN, 
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/auth0' },
    { src:'~/plugins/dayjs' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
  },
  styleResources: {
    scss: [ 
      '~/assets/style/lib/*',
      '~/assets/style/base.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
