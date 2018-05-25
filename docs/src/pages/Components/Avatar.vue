<template>
  <AppContainer page="Avatar">
    <MdAvatar class="md-avatar-icon md-small">B</MdAvatar>

    <MdAvatar class="md-avatar-icon">A</MdAvatar>

    <MdAvatar class="md-avatar-icon md-large">B</MdAvatar>

    <MdAvatar class="md-small">
      <img src="/img/examples/avatar.jpg" alt="People">
    </MdAvatar>

    <MdAvatar>
      <img src="/img/examples/avatar.jpg" alt="Avatar">
    </MdAvatar>

    <MdAvatar class="md-large">
      <img src="/img/examples/avatar.jpg" alt="Avatar">
    </MdAvatar>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import MdAvatar from '@vuematerial/avatar'

  Vue.use(MdAvatar)

  @Component
  export default class PageAvatar extends Vue {}
</script>

<style lang="scss">
  @import '~@vuematerial/avatar/avatar';
</style>

<style lang="scss" scoped>

</style>
