<template>
  <MdTagSwitcher :md-tag="htmlTag" class="md-divider" />
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  @Component({
    components: {
      MdTagSwitcher
    }
  })
  export default class MdDivider extends Vue {
    get htmlTag () {
      if (this.$parent.$options._componentTag === 'md-list') {
        return 'li'
      }

      return 'hr'
    }
  }
</script>
