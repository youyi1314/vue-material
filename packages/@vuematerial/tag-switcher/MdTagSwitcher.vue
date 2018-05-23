<script>
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component({
    functional: true
  })
  export default class MdContent extends MdComponent {
    @Prop(String, { default: 'div' })
    mdTag

    render (createElement, { props, children, data, listeners }) {
      return createElement(props.mdTag, {
        ...data,
        on: listeners
      }, children)
    }
  }
</script>
