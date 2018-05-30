<template>
  <AppContainer page="Ripple">
    <AppExample>
      <MdButton @click="triggerActive()">Trigger</MdButton>
      <div class="test" />

      <div class="ripple-container">
        <MdRipple :md-active.sync="trigger">Click here</MdRipple>
      </div>

      <div class="ripple-container">
        <MdRipple>Click here</MdRipple>
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
  .ripple-container {
    width: 150px;
    height: 200px;
    margin: 24px;
    display: inline-flex;

    .md-ripple {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 4px;
      background-color: #cacaca;
    }
  }

  .test {
    padding: 24px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3129381293;
    pointer-events: none;
    background-color: #fff;
  }
</style>
