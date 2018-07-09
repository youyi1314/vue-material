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
        <MdIcon>edit</MdIcon> Default
      </MdButton>

      <MdButton class="md-contained md-primary">
        <MdIcon>shopping_cart</MdIcon> Primary
      </MdButton>

      <MdButton class="md-contained md-accent">
        <MdIcon>print</MdIcon> Accent
      </MdButton>

      <MdButton class="md-contained md-accent" disabled>
        <MdIcon>thumb_down</MdIcon> Disabled
      </MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-fab">
        <MdIcon>add</MdIcon>
      </MdButton>

      <MdButton class="md-fab md-primary">
        <MdIcon>edit</MdIcon>
      </MdButton>

      <MdButton class="md-fab md-plain">
        <MdIcon>shopping_cart</MdIcon>
      </MdButton>

      <MdButton class="md-fab md-mini">
        <MdIcon>print</MdIcon>
      </MdButton>

      <MdButton class="md-fab" disabled>
        <MdIcon>thumb_down</MdIcon>
      </MdButton>
    </AppExample>

    <AppExample>
      <MdButton class="md-extended-fab">
        <MdIcon>add</MdIcon>
        Create
      </MdButton>

      <MdButton class="md-extended-fab md-primary">
        <MdIcon>edit</MdIcon>
        Edit
      </MdButton>

      <MdButton class="md-extended-fab md-plain">
        <MdIcon>shopping_cart</MdIcon>
        Add to cart
      </MdButton>

      <MdButton class="md-extended-fab md-mini">
        <MdIcon>print</MdIcon>
        Print
      </MdButton>

      <MdButton class="md-extended-fab" disabled>
        <MdIcon>thumb_down</MdIcon>
        Dislike
      </MdButton>
    </AppExample>

    <AppExample>
      <MdButton href="/components/button/example">Default</MdButton>
      <MdButton to="/components/button/router-link" class="md-primary">Primary</MdButton>
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
  .md-fab + .md-fab,
  .md-extended-fab + .md-extended-fab {
    margin-left: 8px;
  }
</style>
