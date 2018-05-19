<template>
  <Transition name="app-container" appear>
    <main class="app-container" @scroll="onScroll" :style="appContainerStyles">
      <div class="app-container-wrapper">
        <header class="app-container-header" ref="header" :class="{ 'fixed': isHeaderFixed }">
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

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import AppFooter from '@/components/AppFooter.vue'

  @Component({
    components: {
      AppFooter
    }
  })
  export default class AppContainer extends Vue {
    @Prop()
    page: string

    isHeaderFixed: boolean = false
    header: HTMLElement | null = null
    headerHeight: number = 0

    get pageKey () {
      return `page${this.page}`
    }

    get appContainerStyles(): string {
      if (this.isHeaderFixed) {
        return `padding-top: ${this.headerHeight}px`
      }

      return ''
    }

    onScroll(event: any) {
      const targetEl = event.target as HTMLElement

      requestAnimationFrame(() => {
        if (this.header) {
          this.isHeaderFixed = targetEl.scrollTop > this.header.offsetTop + 24
        }
      })
    }

    mounted() {
      this.header = this.$refs.header as HTMLElement
      this.headerHeight = this.header.offsetHeight
    }
  }
</script>

<style lang="scss" scoped>
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
    transform: translate3D(-72px, 0, 0);
  }

  &-enter-active {
    overflow: hidden;
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
      content: ' ';
    }
  }

  &-description {
    margin: 1rem 0;
  }
}
</style>
