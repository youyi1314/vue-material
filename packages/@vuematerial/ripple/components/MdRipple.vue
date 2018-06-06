<template>
  <MdTagSwitcher
    v-bind="mdAttrs || $attrs"
    v-on="$listeners"
    :md-tag="mdTag"
    :class="rippleClasses"
    v-if="!isDisabled"
    @mousedown.passive="onMouseDown"
    @mouseout.passive="onMouseOut"
    @mouseup.passive="onMouseUp"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <MdRippleWave
      v-for="({ style, classes, triggered }, id) in waves"
      :key="id"
      :style="style"
      :class="classes"
      :id="triggered ? id : ''"
      @md-ripple-end="clearTriggeredWave"
    />

    <slot />
  </MdTagSwitcher>

  <MdTagSwitcher :md-tag="mdTag" :class="'md-ripple md-ripple-disabled'" v-else>
    <slot />
  </MdTagSwitcher>
</template>

<script>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
  import uuid from '@vuematerial/core/MdUuid'
  import isObjectEmpty from '@vuematerial/core/isObjectEmpty'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'
  import raf from 'raf'
  import MdRippleWave from './MdRippleWave'

  @Component({
    components: {
      MdRippleWave,
      MdTagSwitcher
    }
  })
  export default class MdRipple extends Vue {
    @Prop({ type: Boolean, default: false })
    mdActive

    @Prop({ type: Boolean, default: false })
    mdDisabled

    @Prop({ type: Boolean, default: false })
    mdCentered

    @Prop({ type: String, default: 'div' })
    mdTag

    @Prop({ type: Object, default: () => ({}) })
    mdAttrs

    waves = {}
    lastWave = null
    triggeredWave = null
    touched = false
    touchTimeout = null

    get isDisabled () {
      return !this.$material.ripple || this.mdDisabled
    }

    get rippleClasses () {
      return [
        'md-ripple',
        { 'md-centered': this.mdCentered },
        this.mdAttrs.class
      ]
    }

    @Watch('mdActive')
    onMdActive (active) {
      if (active) {
        this.createWave({}, true)
        this.$emit('update:mdActive', false)
      }
    }

    getWaveSize () {
      const { offsetWidth, offsetHeight } = this.$el

      return Math.round(Math.max(offsetWidth, offsetHeight) * 2.3)
    }

    getSquareSize (size) {
      const side = size + 'px'

      return {
        width: side,
        height: side
      }
    }

    getCenteredStyles (size) {
      const halfSize = -size / 2 + 'px'

      return {
        ...this.getSquareSize(size),
        'margin-top': halfSize,
        'margin-left': halfSize
      }
    }

    getNormalStyles (event, size) {
      const rect = this.$el.getBoundingClientRect()
      let top = event.pageY
      let left = event.pageX

      if (event.type === 'touchstart') {
        top = event.changedTouches[0].pageY
        left = event.changedTouches[0].pageX
      }

      return {
        ...this.getSquareSize(size),
        top: top - rect.top - size / 2 - document.documentElement.scrollTop + 'px',
        left: left - rect.left - size / 2 - document.documentElement.scrollLeft + 'px'
      }
    }

    getWaveStyle (event, forceCentered) {
      let size = this.getWaveSize()

      if (this.mdCentered || forceCentered) {
        return this.getCenteredStyles(size)
      }

      return this.getNormalStyles(event, size)
    }

    createWave (event, forceCentered) {
      const waveId = uuid()

      this.lastWave = waveId
      this.$set(this.waves, waveId, {
        style: this.getWaveStyle(event, forceCentered),
        classes: forceCentered && 'md-force-centered',
        triggered: forceCentered
      })

      return waveId
    }

    clearWave (id) {
      this.$delete(this.waves, id)
    }

    onMouseDown (event) {
      if (!this.touched) {
        raf(() => this.createWave(event, false))
      }
    }

    onMouseOut () {
      if (!isObjectEmpty(this.waves)) {
        this.$set(this, 'waves', {})
      }
    }

    onMouseUp () {
      this.clearWave(this.lastWave)
    }

    onTouchStart (event) {
      this.touched = true
      raf(() => this.createWave(event, false))
    }

    onTouchEnd () {
      this.clearWave(this.lastWave)
      window.clearTimeout(this.touchTimeout)
      this.touchTimeout = window.setTimeout(() => {
        this.touched = false
        this.$set(this, 'waves', {})
      }, 100)
    }

    clearTriggeredWave (id) {
      this.clearWave(id)
    }
  }
</script>
