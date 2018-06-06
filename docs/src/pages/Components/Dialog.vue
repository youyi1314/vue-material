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

    <AppExample>
      <MdButton class="md-contained md-primary" @click="alertModal = !alertModal">Open</MdButton>
      <MdDialogAlert md-title="Something happened" :md-active.sync="alertModal">
        Qui consectetur blanditiis reprehenderit, aspernatur minus rem assumenda!
      </MdDialogAlert>
    </AppExample>

    <AppExample>
      <MdButton class="md-contained md-primary" @click="confirmModal = !confirmModal">Open</MdButton>
      <MdDialogConfirm md-title="Do you confirm?" :md-active.sync="confirmModal">
        Confirm?
      </MdDialogConfirm>
    </AppExample>
  </AppContainer>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PageDialog extends Vue {
    firstModal = false
    alertModal = false
    confirmModal = false
  }
</script>

<style lang="scss" scoped>

</style>
