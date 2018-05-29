<template>
  <div
    :class="['md-ripple', rippleClasses]"
    @touchstart.passive="event => mdEventTrigger && touchStartCheck(event)"
    @touchmove.passive="event => mdEventTrigger && touchMoveCheck(event)"
    @mousedown.passive="event => mdEventTrigger && startRipple(event)"
  >
    <slot />

    <MdRippleWave
      v-if="!isDisabled"
      v-for="ripple in ripples"
      :key="ripple.uuid"
      :class="['md-ripple-wave', waveClasses]"
      :style="ripple.waveStyles"
      @md-end="clearWaves(ripple.uuid)"
    />
  </div>
</template>

<script>
  import { Component, Prop, Watch } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'
  import uuid from '@vuematerial/core/MdUuid'
  import MdRippleWave from './MdRippleWave'
  import raf from 'raf'

  @Component({
    components: {
      MdRippleWave
    }
  })
  export default class MdRipple extends MdComponent {
    /* Props */
    @Prop
    mdActive

    @Prop({ Boolean, default: false })
    mdDisabled

    @Prop({ Boolean, default: false })
    mdCentered

    @Prop({ type: Boolean, default: true })
    mdEventTrigger

    /* Data */
    ripples = []
    touchTimeout = null
    eventType = null

    /* Computed */
    get isDisabled () {
      return !this.$material.ripple || this.mdDisabled
    }

    get rippleClasses () {
      return {
        'md-disabled': this.isDisabled
      }
    }

    get waveClasses () {
      return {
        'md-centered': this.mdCentered
      }
    }

    /* Watchers */
    @Watch('mdActive')
    onMdActive (active) {
      const isBoolean = typeof active === 'boolean'
      const isEvent = active.constructor.toString().match(/function (\w*)/)[1].toLowerCase() === 'mouseevent'

      if (isBoolean && this.mdCentered && active) {
        this.startRipple({
          type: 'mousedown'
        })
      } else if (isEvent) {
        this.startRipple(active)
      }

      this.$emit('update:mdActive', false)
    }

    /* Methods */
    touchMoveCheck () {
      window.clearTimeout(this.touchTimeout)
    }

    touchStartCheck ($event) {
      this.touchTimeout = window.setTimeout(() => {
        this.startRipple($event)
      }, 100)
    }

    startRipple ($event) {
      raf(() => {
        const { eventType, isDisabled, mdCentered } = this

        if (!isDisabled && (!eventType || eventType === $event.type)) {
          let size = this.getSize()
          let position = null

          if (mdCentered) {
            position = this.getCenteredPosition(size)
          } else {
            position = this.getHitPosition($event, size)
          }

          this.eventType = $event.type
          this.ripples.push({
            waveStyles: this.applyStyles(position, size),
            uuid: uuid()
          })
        }
      })
    }

    applyStyles (position, size) {
      size += 'px'

      return {
        ...position,
        width: size,
        height: size
      }
    }

    clearWaves (uuid) {
      if (uuid) {
        this.ripples = this.ripples.filter(ripple => ripple.uuid !== uuid)
      } else {
        this.ripples.length = 0
      }
    }

    getSize () {
      const { offsetWidth, offsetHeight } = this.$el

      return Math.round(Math.max(offsetWidth, offsetHeight))
    }

    getCenteredPosition (size) {
      const halfSize = -size / 2 + 'px'

      return {
        'margin-top': halfSize,
        'margin-left': halfSize
      }
    }

    getHitPosition ($event, elementSize) {
      const rect = this.$el.getBoundingClientRect()
      let top = $event.pageY
      let left = $event.pageX

      if ($event.type === 'touchstart') {
        top = $event.changedTouches[0].pageY
        left = $event.changedTouches[0].pageX
      }

      return {
        top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
        left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
      }
    }
  }
</script>
