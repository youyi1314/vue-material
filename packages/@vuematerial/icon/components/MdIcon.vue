<template>
  <MdSvgLoader
    v-if="mdSrc"
    :md-src="mdSrc"
    class="md-icon md-icon-image"
    @md-loaded="$emit('md-loaded')"
  />
  <i v-else class="md-icon md-icon-font">
    <slot />
  </i>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdSvgLoader from '@vuematerial/svg-loader/MdSvgLoader'

  const props = {
    mdSrc: {
      type: String,
      default: ''
    }
  }

  @Component({
    props,
    components: {
      MdSvgLoader
    }
  })
  export default class MdIcon extends Vue {}
</script>
