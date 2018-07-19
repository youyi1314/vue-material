<template>
  <AppContainer page="Field">
    <AppExample>
      <MdField>
        <label>Username</label>
        <MdInput />
      </MdField>

      <MdField>
        <label>Password</label>
        <MdInput />
      </MdField>

      <MdField>
        <MdIcon>money</MdIcon>
        <label>Password confirmation</label>
        <MdInput />
      </MdField>

      <MdField>
        <MdIcon>favorite</MdIcon>
        <label>Password confirmation</label>
        <MdInput />
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
