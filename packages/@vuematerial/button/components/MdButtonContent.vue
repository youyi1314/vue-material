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
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'
  import MdRipple from '@vuematerial/ripple/components/MdRipple'

  @Component({
    components: {
      MdRipple
    }
  })
  export default class MdButtonContent extends MdComponent {
    @Prop(Boolean)
    mdRipple

    @Prop()
    mdRippleActive

    @Prop(Boolean)
    disabled
  }
</script>
