<template>
  <AppContainer page="Ripple">
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
    margin: 0 24px;
    display: inline-block;
    vertical-align: top;
    border-radius: 6px;

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
</style>
