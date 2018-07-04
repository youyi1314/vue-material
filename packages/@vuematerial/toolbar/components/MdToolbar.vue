<template>
  <div :class="classes" class="md-toolbar">
    <span v-if="mdInset" class="md-cut-out">
      <span :style="cutOutStyles" class="md-cut-out-mask" />
    </span>

    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdObserveElement from '@vuematerial/core/MdObserveElement'

  const props = {
    mdElevation: {
      type: [String, Number],
      default: 4
    },
    mdInset: {
      type: Boolean,
      default: false
    }
  }

  @Component({
    props
  })
  export default class MdToolbar extends Vue {
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

    mounted () {
      this.setFabEl()
      this.setupFabObserver()
      this.setFabStyles()
    }

    beforeDestroy () {
      this.destroyToolbarObserver()
      this.destroyFabObserver()
    }

    getCutOutStyles () {
      if (this.fabEl) {
        return {
          width: this.fabEl.clientWidth + 16 + 'px',
          height: this.fabEl.clientHeight + 16 + 'px',
          borderRadius: this.fabEl.clientHeight + 16 + 'px'
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

    onToolbarMutation () {
      this.setFabEl()

      if (this.fabEl) {
        this.fabMutationObserver = MdObserveElement(this.fabEl, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        }, this.setFabStyles)

        if ('ResizeObserver' in window) {
          this.fabResizeObserver = new ResizeObserver(this.setFabStyles)
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
  }
</script>
