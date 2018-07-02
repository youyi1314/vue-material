<template>
  <div class="md-field">
    <slot />

    <div class="md-field-notch">
      <span class="md-field-notch-mask left"/>
      <span class="md-field-notch-mask right"/>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdField extends Vue {

  }
</script>
