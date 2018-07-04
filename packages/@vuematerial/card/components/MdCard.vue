<template>
  <MdTagSwitcher :md-tag="mdTag" class="md-card">
    <slot />
  </MdTagSwitcher>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  const props = {
    mdTag: {
      type: String,
      default: 'div'
    }
  }

  @Component({
    props,
    components: {
      MdTagSwitcher
    }
  })
  export default class MdCard extends Vue {

  }
</script>
