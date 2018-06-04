<template>
  <AppContainer page="Dialog">
    <AppExample>
      <MdButton class="md-contained md-primary" @click="firstModal = !firstModal">Open</MdButton>
      <MdDialog :md-active.sync="firstModal">
        <MdDialogContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum pariatur aspernatur sed libero, tempora voluptate reprehenderit harum, unde delectus nostrum quaerat mollitia perferendis consequuntur corrupti optio necessitatibus autem? Esse, illum.
        </MdDialogContent>
      </MdDialog>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageDialog extends Vue {
    firstModal = false
  }
</script>

<style lang="scss" scoped>

</style>
