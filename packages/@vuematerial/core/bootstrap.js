import MdReactive from './MdReactive'
import MdThemeFactory from './MdThemeFactory'

function reactiveTheming (obj, prop, target) {
  Object.defineProperties(obj, {
    [prop]: {
      get: () => target[prop],
      set (value) {
        target[prop] = value
      }
    }
  })
}

const init = () => {
  let material = MdReactive({
    ripple: true,
    theming: {},
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'YYYY-MM-DD',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D'],
      firstDayOfAWeek: 0
    }
  })

  reactiveTheming(material.theming, 'metaColors', MdThemeFactory)
  reactiveTheming(material.theming, 'themeName', MdThemeFactory)
  reactiveTheming(material.theming, 'enabled', MdThemeFactory)

  return material
}

export default (Vue) => {
  if (!Vue.material) {
    Vue.material = init()
    Vue.prototype.$material = Vue.material
  }
}
