<template>
  <transition name="md-ripple" @after-enter="onAfterEnd()">
    <span class="md-ripple-wave" />
  </transition>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class MdRipple extends Vue {
    @Prop(String)
    id

    onAfterEnd () {
      if (this.id) {
        this.$emit('md-ripple-end', this.id)
      }
    }
  }
</script>
