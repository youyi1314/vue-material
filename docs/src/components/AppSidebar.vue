<template>
  <Transition name="app-sidebar">
    <aside class="app-sidebar">
      <header class="app-sidebar-header">
        <h1 class="app-sidebar-title">
          <RouterLink to="/">{{ $t('appName') }}</RouterLink>
        </h1>
      </header>

      <nav class="app-sidebar-nav">
        <RouterLink to="/style">Style</RouterLink>
        <div class="app-sidebar-nav-group" />

        <RouterLink to="/components">Components</RouterLink>
        <div class="app-sidebar-nav-group">
          <RouterLink to="/components/avatar">Avatar</RouterLink>
          <RouterLink to="/components/content">Content</RouterLink>
          <RouterLink to="/components/divider">Divider</RouterLink>
          <RouterLink to="/components/field">Field</RouterLink>
        </div>

        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/license">License</RouterLink>
      </nav>
    </aside>
  </Transition>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class AppSidebar extends Vue {}
</script>

<style lang="scss" scoped>
  @import '~@vuematerial/theme/engine/functions';

  .app-sidebar {
    width: 220px;
    height: 100vh;
    position: relative;
    z-index: 2;
    background-color: #fff;
    border-right: 1px solid rgba(#000, .12);

    &-enter,
    &-leave-active {
      opacity: 0;
      transform: translate3D(-48px, 0, 0);
    }

    &-title {
      margin: 0;
      font-size: 24px;

      a {
        color: inherit;
        text-decoration: none;
      }
    }

    &-header {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-nav {
      padding: 40px 8px;
      display: flex;
      flex-direction: column;

      a {
        margin: 2px 0;
        padding: 4px 8px;
        border-radius: 4px;
        color: rgba(#000, .87) !important;

        &:hover {
          color: #0092D6 !important;
          text-decoration: none !important;
        }

        &.router-link-exact-active {
          font-weight: 700;
          background-color: lighten(#0092D6, 52%);
          color: #0092D6 !important;
        }
      }
    }

    &-nav-group {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      a {
        padding-left: 24px;
      }
    }
  }
</style>
