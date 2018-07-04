<template>
  <MdDialog v-bind="$attrs" :md-fullscreen="false" v-on="$listeners">
    <MdDialogTitle v-if="mdTitle">{{ mdTitle }}</MdDialogTitle>
    <MdDialogContent v-if="mdContent" v-html="mdContent" />
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
  import { Component, Vue } from 'vue-property-decorator'

  const props = {
    mdTitle: {
      type: String,
      default: ''
    },
    mdContent: {
      type: String,
      default: ''
    },
    mdConfirmText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    }
  }

  @Component({
    props
  })
  export default class MdDialogConfirm extends Vue {
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
