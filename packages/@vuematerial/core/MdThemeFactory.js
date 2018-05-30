import Vue from 'vue'

let msColor = null
let themeColor = null
let maskIcon = null

export default new Vue({
  data: () => ({
    prefix: 'md-theme-',
    themeName: 'default',
    enabled: true,
    metaColors: false
  }),

  computed: {
    themeTarget () {
      if (!this.$isServer) {
        return document.documentElement
      }

      return null
    },

    fullThemeName () {
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

    themeName (newTheme, oldTheme) {
      newTheme = this.getThemeName(newTheme)

      this.themeTarget.classList.remove(this.getThemeName(oldTheme))
      this.themeTarget.classList.add(newTheme)

      if (this.metaColors) {
        this.setHtmlMetaColors(newTheme)
      }
    },

    metaColors (meta) {
      if (meta) {
        this.setHtmlMetaColors(this.fullThemeName)
      } else {
        this.setHtmlMetaColors('')
      }
    }
  },

  methods: {
    getThemeName (theme) {
      const themeName = theme || this.themeName

      return this.prefix + themeName
    },
    setMicrosoftColors (primaryColor) {
      if (msColor) {
        msColor.setAttribute('content', primaryColor)
      } else {
        msColor = document.createElement('meta')

        msColor.name = 'msapplication-TileColor'
        msColor.content = primaryColor

        document.head.appendChild(msColor)
      }
    },
    setThemeColors (primaryColor) {
      if (themeColor) {
        themeColor.setAttribute('content', primaryColor)
      } else {
        themeColor = document.createElement('meta')

        themeColor.name = 'theme-color'
        themeColor.content = primaryColor

        document.head.appendChild(themeColor)
      }
    },
    setMaskColors (primaryColor) {
      if (maskIcon) {
        maskIcon.setAttribute('color', primaryColor)
      } else {
        maskIcon = document.createElement('meta')

        maskIcon.rel = 'mask-icon'
        maskIcon.color = primaryColor

        document.head.appendChild(maskIcon)
      }
    },
    setHtmlMetaColors (themeName) {
      let primaryColor = '#fff'

      if (themeName) {
        const computedStyle = window.getComputedStyle(document.documentElement)

        primaryColor = computedStyle.getPropertyValue(`--${themeName}-primary`).trim()
      }

      if (primaryColor) {
        msColor = document.querySelector('[name="msapplication-TileColor"]')
        themeColor = document.querySelector('[name="theme-color"]')
        maskIcon = document.querySelector('[rel="mask-icon"]')

        this.setMicrosoftColors(primaryColor)
        this.setThemeColors(primaryColor)
        this.setMaskColors(primaryColor)
      }
    }
  }
})
