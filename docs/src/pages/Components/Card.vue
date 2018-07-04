<template>
  <AppContainer page="Card">
    <AppExample>
      <MdCard />
      <MdCard class="md-primary" />
      <MdCard class="md-accent" />
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageCard extends Vue {

  }
</script>

<style lang="scss" scoped>
  .md-card {
    min-height: 100px;

    + .md-card {
      margin-top: 24px;
    }
  }
</style>
