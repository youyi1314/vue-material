<template>
  <Transition name="app-sidebar">
    <aside class="app-sidebar">
      <header class="app-sidebar-header">
        <h1 class="app-sidebar-title">
          <MdRipple>
            <RouterLink to="/">{{ $t('appName') }}</RouterLink>
          </MdRipple>
        </h1>
      </header>

      <nav class="app-sidebar-nav">
        <RouterLink to="/style">
          <MdRipple>Style</MdRipple>
        </RouterLink>
        <div class="app-sidebar-nav-group" />

        <RouterLink to="/components">
          <MdRipple>Components</MdRipple>
        </RouterLink>

        <div class="app-sidebar-nav-group">
          <RouterLink to="/components/avatar">
            <MdRipple>Avatar</MdRipple>
          </RouterLink>

          <RouterLink to="/components/button">
            <MdRipple>Button</MdRipple>
          </RouterLink>

          <RouterLink to="/components/content">
            <MdRipple>Content</MdRipple>
          </RouterLink>

          <RouterLink to="/components/divider">
            <MdRipple>Divider</MdRipple>
          </RouterLink>

          <RouterLink to="/components/field">
            <MdRipple>Field</MdRipple>
          </RouterLink>

          <RouterLink to="/components/ripple">
            <MdRipple>Ripple</MdRipple>
          </RouterLink>
        </div>

        <RouterLink to="/about">
          <MdRipple>About</MdRipple>
        </RouterLink>

        <RouterLink to="/license">
          <MdRipple>License</MdRipple>
        </RouterLink>
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

    &-header .md-ripple {
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
        text-decoration: none !important;

        &.router-link-exact-active .md-ripple {
          background-color: rgba(md-get-palette-color(blue, A400), .12);
          color: md-get-palette-color(blue, A400) !important;
          font-weight: 700;
        }

        .md-ripple {
          margin: 2px 0;
          padding: 4px 8px;
          border-radius: 4px;
          color: rgba(#000, .87) !important;

          &:hover {
            color: md-get-palette-color(blue, A400) !important;
          }
        }
      }
    }

    &-nav-group {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;

      a .md-ripple {
        padding-left: 24px;
      }
    }
  }
</style>
