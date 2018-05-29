<template>
  <MdTagSwitcher
    class="md-content"
    :md-tag="mdTag"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot/>
  </MdTagSwitcher>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  @Component({
    components: {
      MdTagSwitcher
    }
  })
  export default class MdContent extends Vue {
    @Prop({ type: String, default: 'div' })
    mdTag
  }
</script>
