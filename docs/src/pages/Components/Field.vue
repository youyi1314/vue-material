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
        <MdIcon>money</MdIcon>
        <label>Password confirmation</label>
        <input class="md-input">
      </MdField>

      <MdField>
        <MdIcon>favorite</MdIcon>
        <label>Password confirmation</label>
        <input class="md-input">
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
