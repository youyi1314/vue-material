<template>
  <transition name="md-ripple" @after-enter="onRippleEnd">
    <span v-if="isAnimating" />
  </transition>
</template>

<script>
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component
  export default class MdRippleWave extends MdComponent {
    @Prop
    waveClasses

    @Prop
    waveStyles

    isAnimating = true

    onRippleEnd () {
      this.isAnimating = false
      this.$emit('md-end')
    }
  }
</script>
