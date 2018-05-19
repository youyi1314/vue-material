<template>
  <AppContainer page="Field">
    <MdField>
      <label>Username</label>
      <input class="md-input" />
    </MdField>

    <MdField class="focused" :md-theme="test">
      <MdField>
        <MdField>
          <i class="md-icon">♥</i>
          <label>Password confirmation</label>
          <input class="md-input" />
        </MdField>
      </MdField>
    </MdField>

    <MdField>
      <i class="md-icon">♥</i>
      <label>Password confirmation</label>
      <input class="md-input" />
    </MdField>

    <MdField>
      <label>Password confirmation</label>
      <input class="md-input" v-model="test" />
      <i class="md-icon">♥</i>
    </MdField>
  </AppContainer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MdField from '@vuematerial/field'

  Vue.use(MdField)

  @Component
  export default class PageField extends Vue {
    test: string = ''
  }
</script>

<style lang="scss">
  @import '~@vuematerial/field/field';
</style>

<style lang="scss" scoped>

</style>
