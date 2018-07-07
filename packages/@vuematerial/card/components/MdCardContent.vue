<template>
  <div class="md-card-content">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdCardContent extends Vue {}
</script>
