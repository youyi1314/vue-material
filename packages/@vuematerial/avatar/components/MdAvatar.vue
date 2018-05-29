<template>
  <div :class="['md-avatar', $materialTheme.name]">
    <slot />
  </div>
</template>

<script>
  import { Component } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component
  export default class MdAvatar extends MdComponent {}
</script>
