import bootstrap from '@vuematerial/core/bootstrap'
import MdIcon from './components/MdIcon'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdIcon.name, MdIcon)
}
