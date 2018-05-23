import { Component, Vue, Prop } from 'vue-property-decorator'
import MdThemeFactory from './MdThemeFactory'

@Component
export default class MdComponent extends Vue {
  @Prop(String)
  mdTheme

  get $material () {
    const { enabled, getThemeName, getAncestorTheme } = MdThemeFactory
    const $material = {
      theme: {
        enabled: MdThemeFactory.enabled,
        name: null
      }
    }

    if (enabled) {
      $material.theme.name = getThemeName(this.mdTheme || getAncestorTheme(this))
    }

    return $material
  }
}
