<template>
  <AppContainer page="Divider">
    <MdDivider/>
    <MdDivider/>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdDivider from '@vuematerial/divider'

  Vue.use(MdDivider)

  @Component
  export default class PageDivider extends Vue {

  }
</script>

<style lang="scss">
  @import '~@vuematerial/divider/divider';
</style>

<style lang="scss" scoped>
  .md-divider {
    margin-bottom: 24px;
  }
</style>
