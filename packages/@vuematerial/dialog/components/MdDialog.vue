<template>
  <MdPortal>
    <Transition name="md-dialog">
      <div
        class="md-dialog"
        :class="dialogClasses"
        v-on="$listeners"
        v-if="mdActive"
        @keydown.esc="onEsc"
      >
        <div class="md-dialog-container">
          <slot />
        </div>

        <MdOverlay
          md-fixed
          md-no-portal
          :class="mdBackdropClass"
          :md-active.sync="mdActive"
          @click="onOverlayClick"
          v-if="mdActive"
        />
      </div>
    </Transition>
  </MdPortal>
</template>

<script>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import MdPortal from '@vuematerial/portal/MdPortal'
  import MdOverlay from '@vuematerial/overlay/MdOverlay'

  @Component({
    components: {
      MdPortal,
      MdOverlay
    }
  })
  export default class MdDialog extends Vue {
    @Prop(Boolean)
    mdActive

    @Prop({ type: Boolean, default: true })
    mdBackdrop

    @Prop({ type: String, default: 'md-dialog-overlay' })
    mdBackdropClass

    @Prop({ type: Boolean, default: true })
    mdCloseOnEsc

    @Prop({ type: Boolean, default: true })
    mdClickOutsideToClose

    @Prop({ type: Boolean, default: true })
    mdFullscreen

    @Prop(Boolean)
    mdAnimateFromSource

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
