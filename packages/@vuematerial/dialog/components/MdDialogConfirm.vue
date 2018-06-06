<template>
  <MdDialog v-bind="$attrs" v-on="$listeners" :md-fullscreen="false">
    <MdDialogTitle v-if="mdTitle">{{ mdTitle }}</MdDialogTitle>
    <MdDialogContent v-html="mdContent" v-if="mdContent" />
    <MdDialogContent v-else>
      <slot />
    </MdDialogContent>

    <MdDialogActions>
      <MdButton class="md-primary" @click="onCancel">{{ mdCancelText }}</MdButton>
      <MdButton class="md-primary" @click="onConfirm">{{ mdConfirmText }}</MdButton>
    </MdDialogActions>
  </MdDialog>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class MdDialogConfirm extends Vue {
    @Prop(String)
    mdTitle

    @Prop(String)
    mdContent

    @Prop({ type: String, default: 'Ok' })
    mdConfirmText

    @Prop({ type: String, default: 'Cancel' })
    mdCancelText

    onCancel () {
      this.$emit('md-cancel')
      this.$emit('update:mdActive', false)
    }

    onConfirm () {
      this.$emit('md-confirm')
      this.$emit('update:mdActive', false)
    }
  }
</script>
