<template>
  <AppContainer page="Toolbar">
    <AppExample>
      <MdToolbar>
        <h3 class="md-title">Default</h3>
      </MdToolbar>

      <MdToolbar class="md-transparent">
        <h3 class="md-title">Transparent</h3>
      </MdToolbar>

      <MdToolbar class="md-accent">
        <h3 class="md-title">Accent</h3>
      </MdToolbar>
    </AppExample>

    <AppExample>
      <MdToolbar class="md-dense">
        <h3 class="md-title">Dense</h3>
      </MdToolbar>

      <MdToolbar class="md-medium md-accent">
        <div class="md-toolbar-row">
          <h3 class="md-title">Medium</h3>
        </div>
      </MdToolbar>

      <MdToolbar class="md-large md-transparent">
        <div class="md-toolbar-row">
          <h3 class="md-title">Large</h3>
        </div>
      </MdToolbar>

      <MdToolbar class="md-large md-dense">
        <div class="md-toolbar-row">
          <h3 class="md-title">Large Dense</h3>
        </div>
      </MdToolbar>
    </AppExample>

    <AppExample>
      <MdToolbar>
        <h3 class="md-title" style="flex: 1">Title</h3>
        <MdButton class="md-icon-button">
          <MdIcon>more_vert</MdIcon>
        </MdButton>
      </MdToolbar>

      <MdToolbar class="md-accent" md-elevation="1">
        <h3 class="md-title" style="flex: 1">Title</h3>
        <MdButton>Refresh</MdButton>
        <MdButton class="md-primary">Create</MdButton>
      </MdToolbar>

      <MdToolbar class="md-large md-transparent">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <MdButton class="md-icon-button">
              <MdIcon>menu</MdIcon>
            </MdButton>
          </div>

          <div class="md-toolbar-section-end">
            <MdButton class="md-icon-button">
              <MdIcon>refresh</MdIcon>
            </MdButton>

            <MdButton class="md-icon-button">
              <MdIcon>more_vert</MdIcon>
            </MdButton>
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
          <h3 class="md-title">Title on a second row</h3>
        </div>
      </MdToolbar>
    </AppExample>

    <AppExample class="bottom-toolbar">
      <MdToolbar md-inset>
        <div class="md-toolbar-section-start">
          <MdButton class="md-icon-button">
            <MdIcon>menu</MdIcon>
          </MdButton>
        </div>

        <div class="md-toolbar-section-end">
          <MdButton class="md-icon-button">
            <MdIcon>refresh</MdIcon>
          </MdButton>

          <MdButton class="md-icon-button">
            <MdIcon>more_vert</MdIcon>
          </MdButton>
        </div>

        <MdButton class="md-fab">
          <MdIcon>add</MdIcon>
        </MdButton>
      </MdToolbar>

      <MdToolbar class="md-accent md-fab-end" md-inset>
        <div class="md-toolbar-section-start">
          <MdButton class="md-icon-button">
            <MdIcon>menu</MdIcon>
          </MdButton>

          <MdButton class="md-icon-button">
            <MdIcon>refresh</MdIcon>
          </MdButton>

          <MdButton class="md-icon-button">
            <MdIcon>more_vert</MdIcon>
          </MdButton>
        </div>

        <MdButton class="md-fab md-primary">
          <MdIcon>add</MdIcon>
        </MdButton>
      </MdToolbar>

      <MdToolbar class="md-plain">
        <div class="md-toolbar-section-start">
          <MdButton class="md-icon-button">
            <MdIcon>menu</MdIcon>
          </MdButton>
        </div>

        <div class="md-toolbar-section-end">
          <MdButton class="md-icon-button">
            <MdIcon>refresh</MdIcon>
          </MdButton>

          <MdButton class="md-icon-button">
            <MdIcon>more_vert</MdIcon>
          </MdButton>
        </div>

        <MdButton class="md-fab md-primary">
          <MdIcon>add</MdIcon>
        </MdButton>
      </MdToolbar>

      <MdToolbar class="md-fab-end">
        <div class="md-toolbar-section-start">
          <MdButton class="md-icon-button">
            <MdIcon>menu</MdIcon>
          </MdButton>

          <MdButton class="md-icon-button">
            <MdIcon>refresh</MdIcon>
          </MdButton>

          <MdButton class="md-icon-button">
            <MdIcon>more_vert</MdIcon>
          </MdButton>
        </div>

        <MdButton class="md-fab md-accent">
          <MdIcon>add</MdIcon>
        </MdButton>
      </MdToolbar>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageToolbar extends Vue {}
</script>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .bottom-toolbar .md-toolbar {
    margin-top: 48px;
  }
</style>
