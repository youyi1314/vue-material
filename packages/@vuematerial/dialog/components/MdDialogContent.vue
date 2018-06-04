<template>
  <div class="md-dialog-content">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdDialogContent extends Vue {}
</script>
