import bootstrap from '@vuematerial/core/bootstrap'
import MdRipple from './components/MdRipple'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdRipple.name, MdRipple)
}
