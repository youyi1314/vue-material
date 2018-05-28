<template>
  <AppContainer page="Divider">
    <AppExample>
      <MdDivider/>
      <MdDivider/>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageDivider extends Vue {

  }
</script>

<style lang="scss" scoped>
  .md-divider + .md-divider {
    margin-top: 24px;
  }
</style>
