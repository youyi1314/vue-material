<template>
  <MdRipple
    :class="buttonClasses"
    :md-attrs="attributes"
    :md-tag="buttonTag"
    :md-disabled="disabled || !mdRipple"
    class="md-button"
    v-on="$listeners"
  >
    <span class="md-button-content">
      <slot />
    </span>
  </MdRipple>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdRouterLinkProps from '@vuematerial/core/MdRouterLinkProps'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'
  import MdPropValidator from '@vuematerial/core/MdPropValidator'
  // import MdFocused from 'core/mixins/MdFocused/MdFocused'

  const mdAlignmentAccepts = ['left', 'right', 'space-between']
  export const props = {
    href: {
      type: String,
      default: '',
      description: 'Test'
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: '',
      accepts: mdAlignmentAccepts,
      ...MdPropValidator('md-alignment', mdAlignmentAccepts)
    },
    mdRipple: {
      type: Boolean,
      default: true
    }
  }

  @Component({
    props,
    components: {
      MdTagSwitcher
    }
  })
  export default class MdButton extends Vue {
    mdHasFocus = false
    rippleActive = false
    isFlat = false

    /* mixins: [
      MdFocused
    ], */

    get hasRipple () {
      return this.mdRipple && !this.disabled
    }

    get buttonTag () {
      if (this.href) {
        return 'a'
      }

      if (this.isRouterLink()) {
        return 'router-link'
      }

      return 'button'
    }

    get buttonClasses () {
      return {
        'md-flat': this.isFlat,
        'md-focused': this.mdHasFocus,
        'md-disabled': this.disabled
      }
    }

    get buttonType () {
      return !this.href && this.type
    }

    get baseProps () {
      return {
        href: this.href,
        disabled: this.disabled
      }
    }

    get attributes () {
      if (this.href) {
        return this.baseProps
      }

      if (this.isRouterLink()) {
        return this.getRouterLinkProps()
      }

      return this.getButtonProps()
    }

    beforeCreate () {
      const newProps = MdRouterLinkProps(this, this.$options.props)

      delete newProps.to.required

      this.$options.props = newProps
    }

    mounted () {
      this.setIsFlat()
    }

    updated () {
      this.setIsFlat()
    }

    getButtonProps () {
      const newProps = {
        ...this.baseProps,
        ...this.$attrs,
        type: this.type
      }

      delete newProps.href

      return newProps
    }

    getRouterLinkProps () {
      const newProps = {
        ...this.baseProps,
        ...this.$attrs,
        ...this.$props
      }

      delete newProps.mdRipple

      if (newProps.event === 'click') {
        delete newProps.type
        delete newProps.href
      }

      return newProps
    }

    isRouterLink () {
      return this.$router && this.to
    }

    isButtonFlat () {
      const containClass = (cssClass) => this.$el.classList.contains(cssClass)

      return !containClass('md-fab') && !containClass('md-contained') && !containClass('md-raised')
    }

    setIsFlat () {
      window.setTimeout(() => {
        this.isFlat = this.isButtonFlat()
      }, 15)
    }
  }
</script>
