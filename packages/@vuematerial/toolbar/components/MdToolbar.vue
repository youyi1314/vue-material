<template>
  <div class="md-toolbar" :class="classes">
    <span class="md-cut-out" v-if="mdInset" />
    <slot />
  </div>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class MdToolbar extends Vue {
    @Prop({ type: [String, Number], default: 4 })
    mdElevation

    @Prop({ type: Boolean, default: false })
    mdInset

    get classes () {
      let baseClass = `md-elevation-${this.mdElevation}`

      if (this.mdInset) {
        baseClass = `${baseClass} md-inset`
      }

      return baseClass
    }
  }
</script>
