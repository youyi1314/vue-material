<template>
  <MdTagSwitcher :md-tag="mdTag" class="md-content">
    <slot></slot>
  </MdTagSwitcher>
</template>

<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import { VNode } from 'vue'
  import MdComponent from '@vuematerial/core/MdComponent'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  @Component({
    components: {
      MdTagSwitcher
    }
  })
  export default class MdContent extends MdComponent {
    @Prop({ type: String, default: 'div' })
    mdTag: string

    render (createElement: any): VNode {
      return createElement(this.mdTag, {
        staticClass: 'md-content',
        class: [this.$material.theme.name],
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default)
    }
  }
</script>
