<template>
  <Transition name="app-container" appear>
    <main :style="appContainerStyles" class="app-container" @scroll="onScroll">
      <div class="app-container-wrapper">
        <header ref="header" :class="{ 'fixed md-elevation-4': isHeaderFixed }" class="app-container-header">
          <div class="app-container-wrapper">
            <h1 class="app-container-title">{{ $t(`${pageKey}.title`) }}</h1>
            <p class="app-container-description">{{ $t(`${pageKey}.description`) }}</p>
          </div>
        </header>

        <div class="app-container-content">
          <slot />
        </div>
      </div>

      <AppFooter />
    </main>
  </Transition>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import AppFooter from '@/components/AppFooter.vue'

  @Component({
    components: {
      AppFooter
    }
  })
  export default class AppContainer extends Vue {
    @Prop()
    page

    isHeaderFixed = false
    headerEl = null
    headerHeight = 0

    get pageKey () {
      return `page${this.page}`
    }

    get appContainerStyles () {
      if (this.isHeaderFixed) {
        return `padding-top: ${this.headerHeight}px`
      }

      return ''
    }

    onScroll (event) {
      const targetEl = event.target

      requestAnimationFrame(() => {
        if (this.headerEl) {
          this.isHeaderFixed = targetEl.scrollTop > this.headerEl.offsetTop + 24
        }
      })
    }

    mounted () {
      this.headerEl = this.$refs.header
      this.headerHeight = this.headerEl.offsetHeight
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@vuematerial/motion/variables";

  .app-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    overflow: auto;

    &-enter {
      opacity: 0;
      transform: translate3D(0, 80px, 0);

      .app-container-description {
        transform: translate3D(0, -24px, 0);
      }

      .app-container-content /deep/ > {
        * {
          opacity: 0;
        }

        $space: 16px;

        @for $i from 1 through 10 {
          & :nth-child(#{$i}) {
            $space: $space + 16px;

            transform: translate3d(0, $space, 0);
          }
        }
      }
    }

    &-enter-active {
      overflow: hidden;
      transition: $md-motion-open-slow;

      .app-footer {
        opacity: 0;
      }

      /deep/ &-content > * {
        transition: $md-motion-open-slow-duration .15s $md-motion-open-slow-timing;
      }
    }

    &-leave-active {
      display: none;
    }

    &-wrapper {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 24px;

      .app-container-wrapper {
        padding: 0;
      }
    }

    &-header {
      padding: 40px 0;
      background: #f8f8f8;
      transition: $md-motion-default;
      transition-property: background-color;

      &.fixed {
        padding: 0;
        position: fixed;
        top: 0;
        right: 0;
        left: 220px;
        z-index: 10;
        transition-property: background-color, box-shadow;

        .app-container-wrapper {
          padding: 16px 24px;
          display: flex;
          align-items: center;
        }

        .app-container-title {
          padding-bottom: 0;

          &:after {
            width: 10px;
            margin: auto;
            left: 100%;
            transform: translate3d(6px, -12px, 0);
          }
        }

        p {
          margin: 0 0 0 24px;
        }
      }
    }

    &-title {
      margin: 0;
      padding-bottom: 6px;
      position: relative;
      font-size: 24px;

      &:after {
        width: 56px;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--md-theme-neo-primary);
        transition: $md-motion-default-duration $md-motion-default;
        content: ' ';
      }
    }

    &-description {
      margin: 1rem 0;
      transition: $md-motion-open;
    }
  }
</style>
