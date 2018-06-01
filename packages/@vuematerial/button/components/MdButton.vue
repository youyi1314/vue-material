<template>
  <MdRipple
    class="md-button"
    :class="buttonClasses"
    :md-attrs="attributes"
    :md-tag="buttonTag"
    :type="buttonType"
  >
    <span class="md-button-content">
      <slot />
    </span>
  </MdRipple>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdRouterLinkProps from '@vuematerial/core/MdRouterLinkProps'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'
  import MdButtonContent from './MdButtonContent'
    // import MdFocused from 'core/mixins/MdFocused/MdFocused'

  @Component({
    components: {
      MdButtonContent,
      MdTagSwitcher
    }
  })

  export default class MdButton extends Vue {
    @Prop(String)
    href

    @Prop({ type: String, default: 'button' })
    type

    @Prop(Boolean)
    disabled

    @Prop([String, Object])
    to

    @Prop({ type: Boolean, default: true })
    mdRipple

    rippleActive = false

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
        'md-ripple-off': !this.mdRipple,
        'md-focused': this.mdHasFocus
      }
    }

    get buttonType () {
      return !this.href && this.type
    }

    get attributes () {
      const baseProps = {
        href: this.href,
        disabled: this.disabled
      }

      if (this.href) {
        return baseProps
      }

      if (this.isRouterLink()) {
        const newProps = {
          ...baseProps,
          ...this.$attrs,
          ...this.$props
        }

        delete newProps.mdRipple
        delete newProps.type

        return newProps
      }

      return {
        ...baseProps,
        ...this.$attrs
      }
    }

    isRouterLink () {
      return this.$router && this.to
    }

    beforeCreate () {
      const newProps = MdRouterLinkProps(this, this.$options.props)

      delete newProps.to.required

      this.$options.props = newProps
    }
  }
</script>
