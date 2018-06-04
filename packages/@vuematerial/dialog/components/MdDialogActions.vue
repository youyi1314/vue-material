<template>
  <div class="md-dialog-actions">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdDialogActions extends Vue {}
</script>
