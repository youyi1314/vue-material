import Vue from 'vue'

let msColor: HTMLElement | null = null
let themeColor: HTMLElement | null = null
let maskIcon: HTMLElement | null = null

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    theme: 'default',
    enabled: true,
    metaColors: false
  }),

  computed: {
    themeTarget (): HTMLElement | null {
      if (!this.$isServer) {
        return document.documentElement
      }

      return null
    },

    fullThemeName (): string {
      // @ts-ignore: Unknown error
      return this.getThemeName('')
    }
  },

  watch: {
    enabled: {
      immediate: true,
      handler () {
        if (this.themeTarget) {
          if (this.enabled) {
            this.themeTarget.classList.add(this.fullThemeName)
            this.metaColors && this.setHtmlMetaColors(this.fullThemeName)
          } else {
            this.themeTarget.classList.remove(this.fullThemeName)
            this.metaColors && this.setHtmlMetaColors('')
          }
        }
      }
    },

    theme (newTheme: string, oldTheme: string) {
      newTheme = this.getThemeName(newTheme)

      // @ts-ignore: Unknown error
      this.themeTarget.classList.remove(this.getThemeName(oldTheme))
      // @ts-ignore: Unknown error
      this.themeTarget.classList.add(newTheme)

      if (this.metaColors) {
        this.setHtmlMetaColors(newTheme)
      }
    },

    metaColors (meta: string) {
      if (meta) {
        this.setHtmlMetaColors(this.fullThemeName)
      } else {
        this.setHtmlMetaColors('')
      }
    }
  },

  methods: {
    getAncestorTheme (component: any): string {
      if (component) {
        const currentTheme = component.mdTheme
        const getParentThemeName = (parent: any): string => {
          if (parent) {
            const { mdTheme, $parent } = parent

            if (mdTheme && mdTheme !== currentTheme) {
              return mdTheme
            }

            return getParentThemeName($parent)
          }

          return this.theme
        }

        return getParentThemeName(component.$parent)
      }

      return ''
    },
    getThemeName (theme: string) {
      const themeName = theme || this.theme

      return this.prefix + themeName
    },
    setMicrosoftColors (primaryColor: string) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor)
      }
    },
    setThemeColors (primaryColor: string) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor)
      }
    },
    setMaskColors (primaryColor: string) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor)
      }
    },
    setHtmlMetaColors (themeName: string) {
      let primaryColor = '#fff'

      if (themeName) {
        const computedStyle = window.getComputedStyle(document.documentElement)

        primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`)
      }

      if (primaryColor) {
        this.setMicrosoftColors(primaryColor)
        this.setThemeColors(primaryColor)
        this.setMaskColors(primaryColor)
      }
    }
  },

  mounted () {
    msColor = document.querySelector('[name="msapplication-TileColor"]') as HTMLElement
    themeColor = document.querySelector('[name="theme-color"]') as HTMLElement
    maskIcon = document.querySelector('[rel="mask-icon"]') as HTMLElement

    if (this.enabled && this.metaColors) {
      window.addEventListener('load', () => {
        this.setHtmlMetaColors(this.fullThemeName)
      })
    }
  }
})
