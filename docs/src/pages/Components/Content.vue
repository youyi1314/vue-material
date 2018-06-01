<template>
  <AppContainer page="Content">
    <AppExample>
      <MdContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio necessitatibus autem? Esse, illum.
      </MdContent>

      <MdContent md-tag="p">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio necessitatibus autem? Esse, illum.
      </MdContent>
    </AppExample>

    <AppExample>
      <MdContent class="md-primary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio necessitatibus autem? Esse, illum.
      </MdContent>

      <MdContent class="md-accent">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio necessitatibus autem? Esse, illum.
      </MdContent>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageContent extends Vue {

  }
</script>

<style lang="scss" scoped>
  .app-example .md-content {
    padding: 16px;
    margin-bottom: 0;

    + .md-content {
      margin-top: 24px;
    }
  }
</style>
