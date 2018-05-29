<script>
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component({
  })
  export default class MdTagSwitcher extends MdComponent {
    @Prop(String, { default: 'div' })
    mdTag

    render (createElement) {
      return createElement(this.$props.mdTag, {
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default)
    }
  }
</script>
