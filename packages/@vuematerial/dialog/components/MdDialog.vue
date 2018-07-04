<template>
  <MdPortal>
    <Transition name="md-dialog">
      <div
        v-if="mdActive"
        :class="dialogClasses"
        class="md-dialog"
        v-on="$listeners"
        @keydown.esc="onEsc"
      >
        <div class="md-dialog-container">
          <slot />
        </div>

        <MdOverlay
          v-if="mdActive"
          :class="mdBackdropClass"
          :md-active.sync="mdActive"
          md-fixed
          md-no-portal
          @click="onOverlayClick"
        />
      </div>
    </Transition>
  </MdPortal>
</template>

<script>
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import MdPortal from '@vuematerial/portal/MdPortal'
  import MdOverlay from '@vuematerial/overlay/MdOverlay'

  const props = {
    mdActive: {
      type: Boolean,
      default: false
    },
    mdBackdrop: {
      type: Boolean,
      default: true
    },
    mdBackdropClass: {
      type: String,
      default: 'md-dialog-overlay'
    },
    mdCloseOnEsc: {
      type: Boolean,
      default: true
    },
    mdClickOutsideToClose: {
      type: Boolean,
      default: true
    },
    mdFullscreen: {
      type: Boolean,
      default: true
    },
    mdAnimateFromSource: {
      type: Boolean,
      default: false
    }
  }

  @Component({
    props,
    components: {
      MdPortal,
      MdOverlay
    }
  })
  export default class MdDialog extends Vue {
    get dialogClasses () {
      return {
        'md-dialog-fullscreen': this.mdFullscreen
      }
    }

    @Watch('mdActive')
    onMdActive (isActive) {
      this.$nextTick().then(() => {
        if (isActive) {
          this.$emit('md-opened')
        } else {
          this.$emit('md-closed')
        }
      })
    }

    closeDialog () {
      this.$emit('update:mdActive', false)
    }

    onOverlayClick () {
      if (this.mdClickOutsideToClose) {
        this.closeDialog()
      }
      this.$emit('md-clicked-outside')
    }

    onEsc () {
      if (this.mdCloseOnEsc) {
        this.closeDialog()
      }
    }
  }
</script>
