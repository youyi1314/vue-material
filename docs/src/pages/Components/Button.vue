<template>
  <AppContainer page="Button">
    <AppExample>
      <MdButton>Default</MdButton>
      <MdButton class="md-primary">Primary</MdButton>
      <MdButton class="md-accent">Accent</MdButton>
      <MdButton class="md-accent" disabled>Disabled</MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-raised">Default</MdButton>
      <MdButton class="md-raised md-primary">Primary</MdButton>
      <MdButton class="md-raised md-accent">Accent</MdButton>
      <MdButton class="md-raised md-accent" disabled>Disabled</MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-fab">&lt;3</MdButton>
      <MdButton class="md-fab md-primary">&lt;3</MdButton>
      <MdButton class="md-fab md-plain">&lt;3</MdButton>
      <MdButton class="md-fab" disabled>:(</MdButton>
    </AppExample>

    <AppExample>
      <MdButton href="/components/button">Default</MdButton>
      <MdButton to="/components/button" class="md-primary">Primary</MdButton>
      <MdButton class="md-accent">Accent</MdButton>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageButton extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
