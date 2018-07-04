<template>
  <MdDialog v-bind="$attrs" :md-fullscreen="false" v-on="$listeners">
    <MdDialogTitle v-if="mdTitle">{{ mdTitle }}</MdDialogTitle>
    <MdDialogContent v-if="mdContent" v-html="mdContent" />
    <MdDialogContent v-else>
      <slot />
    </MdDialogContent>

    <MdDialogActions>
      <MdButton class="md-primary" @click="$emit('update:mdActive', false)">{{ mdConfirmText }}</MdButton>
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
    }
  }

  @Component({
    props
  })
  export default class MdDialogAlert extends Vue {}
</script>
