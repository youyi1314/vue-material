<template>
  <MdTagSwitcher
    :md-tag="mdTag"
    :class="['md-content', $materialTheme.name]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot/>
  </MdTagSwitcher>
</template>

<script>
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  @Component({
    components: {
      MdTagSwitcher
    }
  })
  export default class MdContent extends MdComponent {
    @Prop({ type: String, default: 'div' })
    mdTag
  }
</script>
