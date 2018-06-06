import Vue from 'vue'
import Router from 'vue-router'
import i18n, { getPageMessages, setMessages } from '@/i18n'

Vue.use(Router)

function importPage (path) {
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
      path: '/components/avatar',
      name: 'components/avatar',
      component: importPage('Components/Avatar')
    },
    {
      path: '/components/button',
      name: 'components/button',
      component: importPage('Components/Button')
    },
    {
      path: '/components/content',
      name: 'components/content',
      component: importPage('Components/Content')
    },
    {
      path: '/components/dialog',
      name: 'components/dialog',
      component: importPage('Components/Dialog')
    },
    {
      path: '/components/divider',
      name: 'components/divider',
      component: importPage('Components/Divider')
    },
    {
      path: '/components/field',
      name: 'components/field',
      component: importPage('Components/Field')
    },
    {
      path: '/components/icon',
      name: 'components/icon',
      component: importPage('Components/Icon')
    },
    {
      path: '/components/ripple',
      name: 'components/ripple',
      component: importPage('Components/Ripple')
    },

    /* STYLE */
    {
      path: '/style',
      name: 'style',
      component: importPage('Style/Style')
    },
    {
      path: '/style/typography',
      name: 'style/typography',
      component: importPage('Style/Typography')
    },

    /* OTHERS */
    {
      path: '/license',
      name: 'license',
      component: importPage('License')
    }
  ]
})
