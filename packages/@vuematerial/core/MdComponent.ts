import { Component, Vue, Prop } from 'vue-property-decorator'
import MdThemeFactory from './MdThemeFactory'

@Component
export default class MdComponent extends Vue {

  @Prop(String)
  mdTheme: string

  get $material (): any {
    const { enabled, getThemeName, getAncestorTheme } = MdThemeFactory
    const $material: any = {
      theme: {
        enabled: MdThemeFactory.enabled,
        name: null
      }
    }

    if (enabled) {
      // @ts-ignore: Unknown error
      $material.theme.name = getThemeName(this.mdTheme || getAncestorTheme(this))
    }

    return $material
  }

}
