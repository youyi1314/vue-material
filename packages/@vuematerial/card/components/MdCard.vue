<template>
  <MdContent :md-tag="mdTag" class="md-card">
    <slot />
  </MdContent>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdContent from '@vuematerial/content/components/MdContent'

  const props = {
    mdTag: {
      type: String,
      default: 'div'
    }
  }

  @Component({
    props,
    components: {
      MdContent
    }
  })
  export default class MdCard extends Vue {

  }
</script>
