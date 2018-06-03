<template>
  <MdSvgLoader
    class="md-icon md-icon-image"
    :md-src="mdSrc"
    v-if="mdSrc"
    @md-loaded="$emit('md-loaded')"
  />
  <i class="md-icon md-icon-font" v-else>
    <slot />
  </i>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import MdSvgLoader from '@vuematerial/svg-loader/MdSvgLoader'

  @Component({
    components: {
      MdSvgLoader
    }
  })
  export default class MdIcon extends Vue {
    @Prop({ type: String, default: '' })
    mdSrc
  }
</script>
