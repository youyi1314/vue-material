<template>
  <div class="md-toolbar" :class="classes">
    <span class="md-cut-out" v-if="mdInset">
      <span class="md-cut-out-mask" :style="cutOutStyles" />
    </span>

    <slot />
  </div>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdObserveElement from '@vuematerial/core/MdObserveElement'

  @Component
  export default class MdToolbar extends Vue {
    @Prop({ type: [String, Number], default: 4 })
    mdElevation

    @Prop({ type: Boolean, default: false })
    mdInset

    cutOutStyles = {}
    toolbarMutationObserver = null
    fabMutationObserver = null
    fabResizeObserver = null

    get classes () {
      let baseClass = `md-elevation-${this.mdElevation}`

      if (this.mdInset) {
        baseClass = `${baseClass} md-inset`
      }

      return baseClass
    }

    getCutOutStyles () {
      if (this.fabEl) {
        return {
          width: this.fabEl.offsetWidth + 16 + 'px',
          height: this.fabEl.offsetHeight + 16 + 'px',
          borderRadius: this.fabEl.offsetHeight + 16 + 'px'
        }
      }

      return {
        width: 0,
        height: 0
      }
    }

    setFabStyles () {
      this.cutOutStyles = this.getCutOutStyles()
    }

    setFabEl () {
      this.fabEl = this.$el.querySelector('.md-fab, .md-extended-fab')
    }

    setFabStylesAfterMutation () {
      const transitionDuration = parseFloat(getComputedStyle(this.fabEl).transitionDuration) * 1000

      setTimeout(this.setFabStyles, transitionDuration)
    }

    onToolbarMutation () {
      this.setFabEl()

      if (this.fabEl) {
        this.fabMutationObserver = MdObserveElement(this.fabEl, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        }, this.setFabStylesAfterMutation)

        if ('ResizeObserver' in window) {
          this.fabResizeObserver = new ResizeObserver(this.setFabStylesAfterMutation)
        }
      } else {
        this.destroyFabObserver()
      }

      this.setFabStyles()
    }

    setupFabObserver () {
      this.toolbarMutationObserver = MdObserveElement(this.$el, { childList: true }, this.onToolbarMutation)
    }

    destroyToolbarObserver () {
      if (this.toolbarMutationObserver) {
        this.toolbarMutationObserver.disconnect()
      }
    }

    destroyFabObserver () {
      if (this.fabMutationObserver) {
        this.fabMutationObserver.disconnect()
      }

      if (this.fabResizeObserver) {
        this.fabResizeObserver.disconnect()
      }
    }

    mounted () {
      this.setFabEl()
      this.setupFabObserver()
      this.setFabStyles()
    }

    beforeDestroy () {
      this.destroyToolbarObserver()
      this.destroyFabObserver()
    }
  }
</script>
