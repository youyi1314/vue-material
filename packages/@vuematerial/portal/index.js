import bootstrap from '@vuematerial/core/bootstrap'
import MdPortal from './MdPortal'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdPortal.name, MdPortal)
}
