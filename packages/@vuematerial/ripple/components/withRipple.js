
import MdRipple from './MdRipple'

export default function (component) {
  return {
    components: {
      MdRipple
    },

    props: {
      mdRipple: {
        type: Boolean,
        default: true
      }
    },
    ...component
  }
}
