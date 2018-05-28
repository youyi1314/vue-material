<template>
  <AppContainer page="Field">
    <AppExample>
      <MdField>
        <label>Username</label>
        <input class="md-input">
      </MdField>

      <MdField class="focused">
        <label>Password</label>
        <input class="md-input">
      </MdField>

      <MdField>
        <i class="md-icon">♥</i>
        <label>Password confirmation</label>
        <input class="md-input">
      </MdField>

      <MdField>
        <label>Password confirmation</label>
        <input class="md-input">
        <i class="md-icon">♥</i>
      </MdField>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageField extends Vue {
  }
</script>

<style lang="scss" scoped>

</style>
