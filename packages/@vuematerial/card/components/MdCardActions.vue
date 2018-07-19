<template>
  <div :class="`md-alignment-${mdAlignment}`" class="md-card-actions">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdPropValidator from '@vuematerial/core/MdPropValidator'

  const mdAlignmentAccepts = ['left', 'right', 'space-between']
  const props = {
    mdAlignment: {
      type: String,
      default: 'right',
      accepts: mdAlignmentAccepts,
      ...MdPropValidator('md-alignment', mdAlignmentAccepts)
    }
  }

  @Component({
    props
  })
  export default class MdCardActions extends Vue {}
</script>
