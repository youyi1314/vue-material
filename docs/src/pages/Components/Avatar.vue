<template>
  <AppContainer page="Avatar">
    <AppExample>
      <MdAvatar class="md-avatar-icon md-small">A</MdAvatar>

      <MdAvatar class="md-avatar-icon">B</MdAvatar>

      <MdAvatar class="md-avatar-icon md-large">CC</MdAvatar>

      <MdAvatar class="md-small">
        <img src="/img/examples/avatar.jpg" alt="People">
      </MdAvatar>

      <MdAvatar>
        <img src="/img/examples/avatar.jpg" alt="Avatar">
      </MdAvatar>

      <MdAvatar class="md-large">
        <img src="/img/examples/avatar.jpg" alt="Avatar">
      </MdAvatar>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageAvatar extends Vue {}
</script>

<style lang="scss" scoped>

</style>
