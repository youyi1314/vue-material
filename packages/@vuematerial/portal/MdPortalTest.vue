<template>
  <MdPortalEl to="md-portal-root" :disabled="mdAttachToParent">
    <slot />
  </MdPortalEl>
</template>

<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  // import uuid from '@vuematerial/core/MdUuid'
  import Portal from 'portal-vue/src/components/portal'
  import createPortal from './createPortal'

  createPortal()

  @Component({
    components: {
      MdPortalEl: Portal
    }
  })
  export default class MdPortal extends Vue {
    @Prop(Boolean)
    mdAttachToParent

    @Prop({
      validator: (value) => {
        if (HTMLElement && value && value instanceof HTMLElement) {
          return true
        }

        Vue.util.warn('The md-target-el prop is invalid. You should pass a valid HTMLElement.', this)

        return false
      }
    })
    mdTarget

  /* portalId = uuid()

    created () {
      this.portalOutlet = this.mdAttachToParent ? this.$el.parentNode : document.createElement('div')

      document.body.appendChild(this.mdTarget || this.portalOutlet)

      this.portalInstance = new Vue({
        name: 'MdPortal',
        render: (createElement) => createElement(PortalTarget, {
          props: {
            name: this.portalId,
            slim: true
          }
        })
      }).$mount(this.portalOutlet)
    }

    beforeDestroy () {
      if (this.portalInstance) {
        this.portalInstance.$destroy()
      }

      if (this.portalOutlet && this.portalOutlet.parentNode) {
        this.portalOutlet.parentNode.removeChild(this.portalOutlet)
      }
    } */
  }
</script>
