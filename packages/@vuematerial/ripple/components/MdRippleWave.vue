<template>
  <transition name="md-ripple" @after-enter="onRippleEnd">
    <span v-if="isAnimating" />
  </transition>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class MdRippleWave extends Vue {
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
