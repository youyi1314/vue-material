<template>
  <div :class="['md-field', $material.theme.name]">
    <slot />

    <div class="md-field-notch">
      <span class="md-field-notch-mask left"></span>
      <span class="md-field-notch-mask right"></span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component
  export default class MdField extends MdComponent {

  }
</script>
