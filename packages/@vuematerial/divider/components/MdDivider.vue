<template>
  <MdTagSwitcher :md-tag="htmlTag" :class="['md-divider', $materialTheme.name]" />
</template>

<script>
  import { Component } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  @Component({
    components: {
      MdTagSwitcher
    }
  })
  export default class MdDivider extends MdComponent {
    get htmlTag () {
      if (this.$parent.$options._componentTag === 'md-list') {
        return 'li'
      }

      return 'hr'
    }
  }
</script>
