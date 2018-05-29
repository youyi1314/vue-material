import { Component, Vue, Prop } from 'vue-property-decorator'
import MdThemeFactory from './MdThemeFactory'

@Component
export default class MdComponent extends Vue {
  @Prop(String)
  mdTheme

  get $materialTheme () {
    const { enabled, getThemeName, getAncestorTheme } = MdThemeFactory
    const $materialTheme = {
      enabled: MdThemeFactory.enabled,
      name: null
    }

    if (enabled) {
      $materialTheme.name = getThemeName(this.mdTheme || getAncestorTheme(this))
    }

    return $materialTheme
  }
}
