<template>
  <MdPortal :md-disabled="mdNoPortal">
    <transition name="md-overlay">
      <div
        v-if="mdActive"
        :class="{ 'md-fixed': mdFixed }"
        class="md-overlay"
        v-on="$listeners"
      />
    </transition>
  </MdPortal>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdPortal from '@vuematerial/portal/MdPortal'

  const props = {
    mdActive: {
      type: Boolean,
      default: false
    },
    mdAttachToParent: {
      type: Boolean,
      default: false
    },
    mdFixed: {
      type: Boolean,
      default: false
    },
    mdNoPortal: {
      type: Boolean,
      default: false
    }
  }

  @Component({
    props,
    components: {
      MdPortal
    }
  })
  export default class MdOverlay extends Vue {}
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
