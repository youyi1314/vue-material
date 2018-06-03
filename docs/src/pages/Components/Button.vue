<template>
  <AppContainer page="Button">
    <AppExample>
      <MdButton>Default</MdButton>
      <MdButton class="md-primary">Primary</MdButton>
      <MdButton class="md-accent">Accent</MdButton>
      <MdButton class="md-accent" disabled>Disabled</MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-contained">Default</MdButton>
      <MdButton class="md-contained md-primary">Primary</MdButton>
      <MdButton class="md-contained md-accent">Accent</MdButton>
      <MdButton class="md-contained md-accent" disabled>Disabled</MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-outlined">Default</MdButton>
      <MdButton class="md-outlined md-primary">Primary</MdButton>
      <MdButton class="md-outlined md-accent">Accent</MdButton>
      <MdButton class="md-outlined md-accent" disabled>Disabled</MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-contained">
        <MdIcon>add</MdIcon> Default
      </MdButton>

      <MdButton class="md-contained md-primary">
        <MdIcon>add</MdIcon> Primary
      </MdButton>

      <MdButton class="md-contained md-accent">
        <MdIcon>add</MdIcon> Accent
      </MdButton>

      <MdButton class="md-contained md-accent" disabled>
        <MdIcon>add</MdIcon> Disabled
      </MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-fab">
        <MdIcon>add</MdIcon>
      </MdButton>

      <MdButton class="md-fab md-primary">
        <MdIcon>favorite</MdIcon>
      </MdButton>

      <MdButton class="md-fab md-plain">
        <MdIcon>star</MdIcon>
      </MdButton>

      <MdButton class="md-fab md-mini">
        <MdIcon>face</MdIcon>
      </MdButton>

      <MdButton class="md-fab" disabled>
        <MdIcon>thumb_down</MdIcon>
      </MdButton>
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
