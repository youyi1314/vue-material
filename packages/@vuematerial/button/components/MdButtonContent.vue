<template>
  <MdRipple
    :md-disabled="!mdRipple || disabled"
    :md-active="mdRippleActive"
    @update:mdActive="active => $emit('update:mdRippleActive', active)">
    <div class="md-button-content">
      <slot />
    </div>
  </MdRipple>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdRipple from '@vuematerial/ripple/components/MdRipple'

  const props = {
    mdRipple: {
      type: Boolean,
      default: false
    },
    mdRippleActive: {
      type: Boolean,
      default: false
    }
  }

  @Component({
    props,
    components: {
      MdRipple
    }
  })
  export default class MdButtonContent extends Vue {}
</script>
