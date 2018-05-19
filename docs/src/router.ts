import Vue from 'vue'
import Router from 'vue-router'
import i18n, { getDocumentLocale, getPageMessages, setMessages } from '@/i18n'

Vue.use(Router)

function importPage(path: string) {
  return async () => {
    const locale = i18n.locale
    const messages = await getPageMessages(locale, path)

    await setMessages(locale, messages)

    return import(`./pages/${path}.vue`)
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: importPage('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: importPage('About')
    },

    /* COMPONENTS */
    {
      path: '/components',
      name: 'components',
      component: importPage('Components/Components')
    },
    {
      path: '/field',
      name: 'field',
      component: importPage('Components/Field')
    },

    /* STYLE */
    {
      path: '/style',
      name: 'style',
      component: importPage('Style/Style')
    },

    /* OTHERS */
    {
      path: '/license',
      name: 'license',
      component: importPage('License')
    }
  ]
})
