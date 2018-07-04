<script>
  import { Component, Vue } from 'vue-property-decorator'

  const props = {
    mdTag: {
      type: String,
      default: 'div'
    }
  }

  @Component({
    props,
    functional: true
  })
  export default class MdTagSwitcher extends Vue {
    render (createElement, { props, data, listeners, children }) {
      return createElement(props.mdTag, {
        ...data,
        nativeOn: listeners
      }, children)
    }
  }
</script>
