<template>
  <MdDialog v-bind="$attrs" v-on="$listeners" :md-fullscreen="false">
    <MdDialogTitle v-if="mdTitle">{{ mdTitle }}</MdDialogTitle>
    <MdDialogContent v-html="mdContent" v-if="mdContent" />
    <MdDialogContent v-else>
      <slot />
    </MdDialogContent>

    <MdDialogActions>
      <MdButton class="md-primary" @click="$emit('update:mdActive', false)">{{ mdConfirmText }}</MdButton>
    </MdDialogActions>
  </MdDialog>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class MdDialogAlert extends Vue {
    @Prop(String)
    mdTitle

    @Prop(String)
    mdContent

    @Prop({ type: String, default: 'Ok' })
    mdConfirmText
  }
</script>
