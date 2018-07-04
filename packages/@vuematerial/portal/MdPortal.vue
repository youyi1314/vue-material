<script>
  import { Component, Vue } from 'vue-property-decorator'
  import Portal from 'portal-vue/src/components/portal'
  import createPortal from './createPortal'

  createPortal()

  const props = {
    mdDisabled: {
      type: Boolean,
      default: false
    },
    mdAttachToParent: {
      type: Boolean,
      default: false
    },
    mdTarget: {
      validator: (value) => {
        if (HTMLElement && value && value instanceof HTMLElement) {
          return true
        }

        Vue.util.warn('The md-target prop is invalid. You should pass a valid HTMLElement.', this)

        return false
      }
    }
  }

  @Component({
    props,
    components: {
      Portal
    }
  })
  export default class MdPortal extends Vue {
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
  }
</script>
