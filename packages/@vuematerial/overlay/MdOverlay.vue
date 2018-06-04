<template>
  <MdPortal :md-disabled="mdNoPortal">
    <transition name="md-overlay">
      <div
        class="md-overlay"
        :class="{ 'md-fixed': mdFixed }"
        v-on="$listeners"
        v-if="mdActive"
      />
    </transition>
  </MdPortal>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdPortal from '@vuematerial/portal/MdPortal'

  @Component({
    components: {
      MdPortal
    }
  })
  export default class MdOverlay extends Vue {
    @Prop(Boolean)
    mdActive

    @Prop(Boolean)
    mdAttachToParent

    @Prop(Boolean)
    mdFixed

    @Prop(Boolean)
    mdNoPortal
  }
</script>

<style lang="scss">
  @import "~@vuematerial/motion/variables";

  .md-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
    background: rgba(#000, .32);
    transition: $md-motion-open;
    transition-property: opacity;
    will-change: opacity;

    body > &,
    &.md-fixed {
      position: fixed;
    }

    &-enter,
    &-leave-active {
      opacity: 0;
    }
  }
</style>
