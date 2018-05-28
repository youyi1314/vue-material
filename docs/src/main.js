import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import { registerServiceWorker } from './worker'
import './components'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
  })

  router.onReady(() => {
    app.$mount('#app')
    app.$material.theming.themeName = 'neo'
    registerServiceWorker()
  })
})
