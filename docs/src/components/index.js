import Vue from 'vue'
import AppContainer from './AppContainer.vue'
import AppSection from './AppSection.vue'

Vue.component('RouterView', Vue.component('router-view'))
Vue.component('RouterLink', Vue.component('router-link'))
Vue.component('Transition', Vue.component('transition'))
Vue.component('TransitionGroup', Vue.component('transition-group'))
Vue.component('KeepAlive', Vue.component('keep-alive'))
Vue.component('Template', Vue.component('template'))

Vue.component('AppContainer', AppContainer)
Vue.component('AppSection', AppSection)
