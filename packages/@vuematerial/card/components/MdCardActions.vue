<template>
  <div :class="`md-alignment-${mdAlignment}`" class="md-card-actions">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdPropValidator from '@vuematerial/core/MdPropValidator'

  const props = {
    mdAlignment: {
      type: String,
      default: 'right',
      ...MdPropValidator('md-alignment', ['left', 'right', 'space-between'])
    }
  }

  @Component({
    props
  })
  export default class MdCardActions extends Vue {}
</script>
