<template>
  <AppContainer page="Ripple">
    <AppExample>
      <MdButton class="md-raised md-primary" @click="triggerActive()">Trigger</MdButton>
      <MdRipple :md-active.sync="trigger">Click here</MdRipple>
      <MdRipple>Click here</MdRipple>
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
  .md-ripple:not(.md-button) {
    width: 150px;
    height: 200px;
    margin: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: #cacaca;
  }
</style>
