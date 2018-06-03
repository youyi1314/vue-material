<template>
  <AppContainer page="Icon">
    <AppExample>
      <MdIcon>menu</MdIcon>
      <MdIcon>add</MdIcon>
      <MdIcon>thumb_up</MdIcon>
      <MdIcon>verified_user</MdIcon>
      <MdIcon>home</MdIcon>
    </AppExample>

    <AppExample>
      <MdIcon>menu</MdIcon>
      <MdIcon class="md-primary">add</MdIcon>
      <MdIcon class="md-primary">thumb_up</MdIcon>
      <MdIcon class="md-accent">verified_user</MdIcon>
      <MdIcon class="md-accent">home</MdIcon>
    </AppExample>

    <AppExample>
      <MdIcon>menu</MdIcon>
      <MdIcon class="md-size-2x">add</MdIcon>
      <MdIcon class="md-size-3x">thumb_up</MdIcon>
      <MdIcon class="md-size-4x">verified_user</MdIcon>
      <MdIcon class="md-size-5x">home</MdIcon>
    </AppExample>

    <AppExample>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <div>
        <MdIcon class="fa fa-bars" />
        <MdIcon class="fa fa-plus" />
        <MdIcon class="fa fa-thumbs-up" />
        <MdIcon class="fa fa-shield" />
        <MdIcon class="fa fa-home" />
      </div>

      <div>
        <MdIcon class="fa fa-bars" />
        <MdIcon class="md-primary fa fa-plus" />
        <MdIcon class="md-primary fa fa-thumbs-up" />
        <MdIcon class="md-accent fa fa-shield" />
        <MdIcon class="md-accent fa fa-home" />
      </div>

      <div>
        <MdIcon class="fa fa-bars" />
        <MdIcon class="md-size-2x fa fa-plus" />
        <MdIcon class="md-size-3x fa fa-thumbs-up" />
        <MdIcon class="md-size-4x fa fa-shield" />
        <MdIcon class="md-size-5x fa fa-home" />
      </div>
    </AppExample>

    <AppExample>
      <div>
        <MdIcon md-src="/img/examples/icons/icon-add.svg" />
        <MdIcon md-src="/img/examples/icons/icon-home.svg" />
        <MdIcon md-src="/img/examples/icons/icon-menu.svg" />
        <MdIcon md-src="/img/examples/icons/icon-thumbs-up.svg" />
        <MdIcon md-src="/img/examples/icons/icon-verified.svg" />
      </div>

      <div>
        <MdIcon md-src="/img/examples/icons/icon-add.svg" />
        <MdIcon class="md-primary" md-src="/img/examples/icons/icon-home.svg" />
        <MdIcon class="md-primary" md-src="/img/examples/icons/icon-menu.svg" />
        <MdIcon class="md-accent" md-src="/img/examples/icons/icon-thumbs-up.svg" />
        <MdIcon class="md-accent" md-src="/img/examples/icons/icon-verified.svg" />
      </div>

      <div>
        <MdIcon md-src="/img/examples/icons/icon-add.svg" />
        <MdIcon class="md-size-2x" md-src="/img/examples/icons/icon-home.svg" />
        <MdIcon class="md-size-3x" md-src="/img/examples/icons/icon-menu.svg" />
        <MdIcon class="md-size-4x" md-src="/img/examples/icons/icon-thumbs-up.svg" />
        <MdIcon class="md-size-5x" md-src="/img/examples/icons/icon-verified.svg" />
      </div>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageIcon extends Vue {}
</script>

<style lang="scss" scoped>
  .md-icon {
    margin: 8px;
  }
</style>
