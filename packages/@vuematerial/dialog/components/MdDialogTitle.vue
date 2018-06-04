<template>
  <span class="md-dialog-title md-title">
    <slot />
  </span>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdDialogTitle extends Vue {}
</script>
