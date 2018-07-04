<template>
  <div class="md-field">
    <slot />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  const props = {

  }

  @Component({
    props
  })
  export default class MdField extends Vue {}
</script>
