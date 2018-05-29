<template>
  <MdTagSwitcher
    v-on="$listeners"
    v-bind="attributes"
    :class="['md-button', buttonClasses, $materialTheme.name]"
    :md-tag="buttonTag"
    :type="buttonType"
    @touchstart="onTouchStart()"
    @touchmove="onTouchMove()"
    @mousedown="onMouseDown()"
  >
    <MdButtonContent v-bind="{ mdRipple, disabled }" :md-ripple-active="rippleActive">
      <slot />
    </MdButtonContent>
  </MdTagSwitcher>
</template>

<script>
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'
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

  export default class MdButton extends MdComponent {
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

    onTouchStart (event) {
      if (this.hasRipple) {
        this.rippleActive = event
      }

      this.$listeners.touchstart && this.$listeners.touchstart(event)
    }

    onTouchMove (event) {
      if (this.hasRipple) {
        this.rippleActive = event
      }

      this.$listeners.touchmove && this.$listeners.touchmove(event)
    }

    onMouseDown (event) {
      if (this.hasRipple) {
        this.rippleActive = event
      }

      this.$listeners.mousedown && this.$listeners.mousedown(event)
    }

    beforeCreate () {
      const newProps = MdRouterLinkProps(this, this.$options.props)

      delete newProps.to.required

      this.$options.props = newProps
    }
  /*
    'update:mdRippleActive': (active) => {
      this.rippleActive = active
    } */
  }
</script>
