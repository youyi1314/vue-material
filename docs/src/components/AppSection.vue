<template>
  <section class="app-section">
    <h2 class="md-title" v-if="title">{{ title }}</h2>

    <slot />
  </section>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class AppSection extends Vue {
    @Prop() title
  }
</script>

<style lang="scss" scoped>
  .app-section {
    + .app-section {
      margin-top: 40px;
    }
  }
</style>
