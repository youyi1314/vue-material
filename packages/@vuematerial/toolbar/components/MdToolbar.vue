<template>
  <div class="md-toolbar" :class="[`md-elevation-${mdElevation}`]">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class MdToolbar extends Vue {
    @Prop({ type: [String, Number], default: 4 })
    mdElevation
  }
</script>
