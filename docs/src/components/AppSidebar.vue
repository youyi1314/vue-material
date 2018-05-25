<template>
  <Transition name="app-sidebar">
    <aside class="app-sidebar">
      <header class="app-sidebar-header">
        <h1 class="app-sidebar-title">
          <RouterLink to="/">{{ $t('appName') }}</RouterLink>
        </h1>
      </header>

      <nav class="app-sidebar-nav">
        <RouterLink to="/about">About</RouterLink>

        <hr>
        <RouterLink to="/style">Style</RouterLink>

        <hr>
        <RouterLink to="/components">Components</RouterLink>
        <RouterLink to="/components/avatar">Avatar</RouterLink>
        <RouterLink to="/components/content">Content</RouterLink>
        <RouterLink to="/components/field">Field</RouterLink>
        <hr>

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
  .app-sidebar {
    width: 220px;
    height: 100vh;
    position: relative;
    z-index: 2;
    background-color: #fff;

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

    &-nav {
      padding: 40px 24px;
      display: flex;
      flex-direction: column;

      hr {
        width: 100%;
        height: 1px;
        border-bottom: none;
      }
    }

    &-nav-group {
      margin: 0 0 16px 16px;
      display: flex;
      flex-direction: column;
    }
  }

  .router-link-exact-active {
    font-weight: 700;
  }
</style>
