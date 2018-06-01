<template>
  <AppContainer page="Avatar">
    <AppExample>
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

    <AppExample>
      <MdAvatar class="md-avatar-icon md-small">A</MdAvatar>
      <MdAvatar class="md-avatar-icon">B</MdAvatar>
      <MdAvatar class="md-avatar-icon md-large">CC</MdAvatar>
    </AppExample>

    <AppExample>
      <MdAvatar class="md-avatar-icon md-small">A</MdAvatar>
      <MdAvatar class="md-avatar-icon md-primary">B</MdAvatar>
      <MdAvatar class="md-avatar-icon md-accent md-large">CC</MdAvatar>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageAvatar extends Vue {}
</script>

<style lang="scss" scoped>
  .md-avatar {
    margin: 8px;
  }
</style>
