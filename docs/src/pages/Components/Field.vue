<template>
  <AppContainer page="Field">
    <MdField>
      <label>Username</label>
      <input class="md-input">
    </MdField>

    <MdField :md-theme="test" class="focused">
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
      <input v-model="test" class="md-input">
      <i class="md-icon">♥</i>
    </MdField>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdField from '@vuematerial/field'

  Vue.use(MdField)

  @Component
  export default class PageField extends Vue {
    test = ''
  }
</script>

<style lang="scss">
  @import '~@vuematerial/field/field';
</style>

<style lang="scss" scoped>

</style>
