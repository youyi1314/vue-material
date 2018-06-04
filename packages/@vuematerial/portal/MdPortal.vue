<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'
  // import uuid from '@vuematerial/core/MdUuid'
  import Portal from 'portal-vue/src/components/portal'
  import createPortal from './createPortal'

  createPortal()

  @Component({
    components: {
      Portal
    }
  })
  export default class MdPortal extends Vue {
    @Prop(Boolean)
    mdAttachToParent

    @Prop(Boolean)
    mdDisabled

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

    render (createElement) {
      if (this.mdDisabled) {
        return this.$slots.default[0]
      }

      return createElement(Portal, {
        props: {
          to: 'md-portal-root'
        }
      }, this.$slots.default)
    }

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
