import bootstrap from '@vuematerial/core/bootstrap'
import MdDivider from './components/MdDivider'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdDivider.name, MdDivider)
}
