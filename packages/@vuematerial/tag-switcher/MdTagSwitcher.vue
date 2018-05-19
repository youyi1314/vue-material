<script lang="ts">
  import { Component, Prop } from 'vue-property-decorator'
  import MdComponent from '@vuematerial/core/MdComponent'

  @Component({
    functional: true
  })
  export default class MdContent extends MdComponent {
    @Prop(String, { default: 'div' })
    mdTag: string

    render (createElement: any, { props, children, data, listeners }: any) {
      return createElement(props.mdTag, {
        ...data,
        on: listeners
      }, children)
    }
  }
</script>
