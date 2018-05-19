<template>
  <footer class="app-footer">
    <a href="https://github.com/marcosmoura" target="_blank">Made with <span class="heart">&hearts;</span> by Marcos Moura</a>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class AppSidebar extends Vue {}
</script>

<style lang="scss" scoped>
  .app-footer {
    min-height: 60px;
    padding: 16px 24px;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
  }

  a {
    line-height: 1.8em;

    &:hover .heart {
      transform: scale(1.4);
    }
  }

  .heart {
    display: inline-block;
  }
</style>
