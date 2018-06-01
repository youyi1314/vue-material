<template>
  <AppContainer page="Ripple">
    <p>A ripple can be applied to an entire component or elements within a component, or as a circular shape over part of the component.</p>

    <AppExample>
      <MdButton class="md-raised md-primary" @click="triggerActive()">Trigger</MdButton>

      <div class="example">
        <MdContent>
          <MdRipple :md-active.sync="trigger">Click here</MdRipple>
        </MdContent>

        <MdContent class="md-primary">
          <MdRipple>Click here</MdRipple>
        </MdContent>

        <MdAvatar>
          <MdRipple>
            <img src="/img/examples/avatar.jpg" alt="Avatar">
          </MdRipple>
        </MdAvatar>
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
    width: 150px;
    height: 200px;
    margin-right: 24px;
    display: inline-block;
    overflow: hidden;
    border-radius: 6px;
    vertical-align: top;

    .md-ripple {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  .md-avatar /deep/ .md-ripple-wave {
    background-color: #fff;
    opacity: .5;
  }

  .md-button {
    margin: 0 0 24px;
  }
</style>
