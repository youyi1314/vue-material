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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate
        reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio
        necessitatibus autem? Esse, illum.
      </MdContent>

      <MdContent class="md-accent">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate
        reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio
        necessitatibus autem? Esse, illum.
      </MdContent>

      <MdContent class="md-plain">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate
        reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio
        necessitatibus autem? Esse, illum.
      </MdContent>
    </AppExample>

    <AppExample class="angled">
      <MdShape :md-angles="[16, 0, 16, 0]">
        <MdCard class="md-primary">
          <MdCardContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate
          </MdCardContent>

          <MdCardActions>
            <MdButton>Buy</MdButton>
          </MdCardActions>
        </MdCard>
      </MdShape>

      <MdShape :md-angles="8">
        <MdButton class="md-primary md-contained">Button as a shape</MdButton>
      </MdShape>

      <MdShape :md-angles="24" md-padding-follows-angles>
        <MdContent class="md-accent md-elevation-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur veritatis molestiae magnam dolorem hic,
          aliquid necessitatibus quibusdam consequuntur molestias aspernatur, similique dolorum tempore ea sapiente
        </MdContent>
      </MdShape>
    </AppExample>

    <AppExample class="angled">
      <MdShape :md-radius="[16, 0, 16, 0]">
        <MdCard class="md-primary">
          <MdCardContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate
          </MdCardContent>

          <MdCardActions>
            <MdButton>Buy</MdButton>
          </MdCardActions>
        </MdCard>
      </MdShape>

      <MdShape :md-radius="32">
        <MdButton class="md-primary md-contained">Button as a shape</MdButton>
      </MdShape>

      <MdShape :md-radius="[8, 24, 8, 24]">
        <MdContent class="md-accent md-elevation-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur veritatis molestiae magnam dolorem hic,
          aliquid necessitatibus quibusdam consequuntur molestias aspernatur, similique dolorum tempore ea sapiente
        </MdContent>
      </MdShape>
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
  .app-example .md-content:not(.md-card) {
    padding: 16px;
    margin-bottom: 0;

    + .md-content {
      margin-top: 24px;
    }
  }

  .angled {
    .md-content {
      width: 320px;
    }
  }

  .md-shape-background {
    background: #303030;
    color: #fff;
  }
</style>
