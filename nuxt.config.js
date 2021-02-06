export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  serverMiddleware: ['~/api/auth.js'],
//  serverMiddleware: [
//    { path: '/api', handler: '~/api/auth.js' }
//  ],
  mode:'universal',
  target:'server',

  head: {
    titleTemplate:'Nuxtjs workshow | %s',
    title: 'nuxtjs-portfollio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['balm-ui/dist/balm-ui.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/balm-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/bulma',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:'http://localhost:3000/',
  },
  auth:{
    stratigies:{
        local:{
            endpoints:{
                login:{
                    method:'post',
                    url:'login',
                    propertyName:'token'
                },
                user:{
                    method:'get',
                    url:'me',
                    propertyName:'user'
                },
                logout:false
            }
        }
    },
    redirect:{
        login:'/login'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
