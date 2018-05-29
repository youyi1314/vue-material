<template>
  <MdContent class="app-example">
    <slot />
  </MdContent>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class AppExample extends Vue {
  }
</script>

<style lang="scss" scoped>
  .app-example {
    padding: 16px;
    border: 1px solid rgba(#000, .12);
    border-radius: 8px;

    + .app-example {
      margin-top: 40px;
    }
  }
</style>
