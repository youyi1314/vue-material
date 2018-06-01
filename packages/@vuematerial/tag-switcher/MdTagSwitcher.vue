<script>
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({
    functional: true
  })
  export default class MdTagSwitcher extends Vue {
    @Prop(String, { default: 'div' })
    mdTag

    render (createElement, { props, data, listeners, children }) {
      return createElement(props.mdTag, {
        ...data,
        nativeOn: listeners
      }, children)
    }
  }
</script>
