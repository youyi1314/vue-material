<template>
  <AppContainer page="Ripple">
    <AppExample>
      <div class="ripple-container">
        <MdRipple>Click here</MdRipple>
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
</style>
