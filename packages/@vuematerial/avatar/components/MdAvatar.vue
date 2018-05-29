<template>
  <div class="md-avatar">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdAvatar extends Vue {}
</script>
