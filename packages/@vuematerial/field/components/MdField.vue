<template>
  <div :class="['md-field', $material.theme.name]">
    <slot />

    <div class="md-field-notch">
      <span class="md-field-notch-mask left"/>
      <span class="md-field-notch-mask right"/>
    </div>
  </div>
</template>

<script>
  import { Component } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component
  export default class MdField extends MdComponent {

  }
</script>
