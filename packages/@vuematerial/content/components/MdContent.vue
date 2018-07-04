<template>
  <MdTagSwitcher
    :md-tag="mdTag"
    v-bind="$attrs"
    class="md-content"
    v-on="$listeners"
  >
    <slot/>
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
  export default class MdContent extends Vue {}
</script>
