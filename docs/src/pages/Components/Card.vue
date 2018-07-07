<template>
  <AppContainer page="Card">
    <AppExample>
      <MdCard>
        <MdCardContent />
        <MdCardActions>
          <MdButton>Buy</MdButton>
        </MdCardActions>
      </MdCard>

      <MdCard class="md-primary">
        <MdCardContent />
        <MdCardActions>
          <MdButton>Buy</MdButton>
        </MdCardActions>
      </MdCard>

      <MdCard class="md-accent">
        <MdCardContent />
        <MdCardActions>
          <MdButton>Buy</MdButton>
        </MdCardActions>
      </MdCard>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageCard extends Vue {

  }
</script>

<style lang="scss" scoped>
  .md-card {
    + .md-card {
      margin-top: 24px;
    }
  }
</style>
