<template>
  <AppContainer page="Typography">
    <div class="example">
      <div>
        <span class="md-h1">H1</span>
      </div>

      <div>
        <span class="md-h2">H2</span>
      </div>

      <div>
        <span class="md-h3">H3</span>
      </div>

      <div>
        <span class="md-h4">H4</span>
      </div>

      <div>
        <span class="md-h5">H5</span>
      </div>

      <div>
        <span class="md-h6">H6</span>
      </div>

      <div>
        <span class="md-subtitle-1">Subtitle 1</span>
      </div>

      <div>
        <span class="md-subtitle-2">Subtitle 2</span>
      </div>

      <div>
        <span class="md-body-1">Body 1</span>
      </div>

      <div>
        <span class="md-body-2">Body 2</span>
      </div>

      <div>
        <RouterLink to="/ui-elements/typography">Link</RouterLink>
      </div>

      <div>
        <MdButton :md-ripple="false">Button</MdButton>
      </div>

      <div>
        <span class="md-caption">Caption</span>
      </div>

      <div>
        <span class="md-overline">Overline</span>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellendus, amet quis, est et adipisci nesciunt repudiandae eos non quidem fugiat deleniti cum cumque laborum aspernatur beatae blanditiis qui aperiam?</p>
    </div>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageTypography extends Vue {

  }
</script>

<style lang="scss" scoped>
  .example > {
    div,
    p {
      min-height: 48px;
      display: flex;
      align-items: center;
    }
  }

  .md-button {
    height: auto;
    min-width: 0;
    margin: 0;
    padding: 0;
  }
</style>
