<template>
  <Transition name="app-sidebar">
    <aside class="app-sidebar">
      <header class="app-sidebar-header">
        <h1 class="app-sidebar-title">
          <RouterLink tag="MdRipple" to="/">{{ $t('appName') }}</RouterLink>
        </h1>
      </header>

      <nav class="app-sidebar-nav">
        <RouterLink tag="MdRipple" to="/style">Style</RouterLink>
        <div class="app-sidebar-nav-group">
          <RouterLink tag="MdRipple" to="/style/typography">Typography</RouterLink>
        </div>

        <RouterLink tag="MdRipple" to="/components">Components</RouterLink>
        <div class="app-sidebar-nav-group">
          <RouterLink tag="MdRipple" to="/components/avatar">Avatar</RouterLink>
          <RouterLink tag="MdRipple" to="/components/button">Button</RouterLink>
          <RouterLink tag="MdRipple" to="/components/content">Content</RouterLink>
          <RouterLink tag="MdRipple" to="/components/dialog">Dialog</RouterLink>
          <RouterLink tag="MdRipple" to="/components/divider">Divider</RouterLink>
          <RouterLink tag="MdRipple" to="/components/field">Field</RouterLink>
          <RouterLink tag="MdRipple" to="/components/icon">Icon</RouterLink>
          <RouterLink tag="MdRipple" to="/components/ripple">Ripple</RouterLink>
          <RouterLink tag="MdRipple" to="/components/toolbar">Toolbar</RouterLink>
        </div>

        <RouterLink tag="MdRipple" to="/about">About</RouterLink>
        <RouterLink tag="MdRipple" to="/license">License</RouterLink>
      </nav>

      <div class="theme-selector">
        <MdButton class="md-raised md-primary" @click="setTheme('neo')">Neo</MdButton>
        <MdButton class="md-raised md-primary" @click="setTheme('neo-dark')">Neo Dark</MdButton>
        <MdButton class="md-raised md-primary" @click="setTheme('default')">Default</MdButton>
        <MdButton class="md-raised md-primary" @click="setTheme('rally')">Rally</MdButton>
        <MdButton class="md-raised md-primary" @click="setTheme('crane')">Crane</MdButton>
      </div>
    </aside>
  </Transition>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class AppSidebar extends Vue {
    setTheme (name) {
      this.$material.theming.themeName = name
    }
  }
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

      .md-ripple {
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: rgba(#000, .87);
      }
    }

    &-nav {
      padding: 40px 8px;
      display: flex;
      flex-direction: column;

      .md-ripple {
        margin: 2px 0;
        padding: 4px 8px;
        cursor: pointer;
        border-radius: 4px;
        color: rgba(#000, .87);

        &.md-activated {
          font-weight: 700;
        }
      }
    }

    &-nav-group {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      .md-ripple {
        padding-left: 24px;
      }
    }
  }

  .theme-selector {
    padding: 0 8px;
    display: flex;
    flex-direction: column;

    .md-button {
      width: 100%;
      margin: 8px 0;
    }
  }
</style>
