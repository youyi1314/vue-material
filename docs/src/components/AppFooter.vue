<template>
  <MdContent md-tag="footer" class="app-footer md-plain">
    <a href="https://github.com/marcosmoura" target="_blank">Made with <span class="heart">&hearts;</span> by Marcos Moura</a>
  </MdContent>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class AppSidebar extends Vue {}
</script>

<style lang="scss" scoped>
  @import '~@vuematerial/motion/variables';
  @import '~@vuematerial/theme/engine/functions';

  .app-footer {
    min-height: 60px;
    padding: 16px 24px;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
    transition: $md-motion-default-duration $md-motion-default;
  }

  a {
    line-height: 1.8em;

    &:hover .heart {
      transform: scale(1.4);
      color: md-get-palette-color(red, 500);
    }
  }

  .heart {
    display: inline-block;
    transition: $md-motion-default;
    color: md-get-palette-color(red, 700);
  }
</style>
