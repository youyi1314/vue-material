<template>
  <AppContainer page="Ripple">
    <p>A ripple can be applied to an entire component or elements within a component, or as a circular shape over part of the component.</p>

    <AppExample>
      <MdButton class="md-raised md-primary" @click="triggerActive()">Trigger</MdButton>

      <div class="example">
        <MdRipple md-tag="MdContent" md-centered :md-active.sync="trigger">
          Click here
        </MdRipple>

        <MdRipple md-tag="MdContent" class="md-primary">
          Click here
        </MdRipple>

        <MdRipple md-tag="MdAvatar" class="md-large">
          <img src="/img/examples/avatar.jpg" alt="Avatar">
        </MdRipple>
      </div>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageRipple extends Vue {
    trigger = false

    triggerActive () {
      this.trigger = true
    }
  }
</script>

<style lang="scss" scoped>
  .example .md-content {
    width: 250px;
    height: 130px;
    margin-right: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    vertical-align: top;

    &:first-child {
      width: 130px;
      height: 130px;
      border-radius: 100%;
    }
  }

  .md-avatar /deep/ .md-ripple-wave {
    background-color: #fff;
    opacity: .3;
  }

  .md-button {
    margin: 0 0 24px;
  }
</style>
