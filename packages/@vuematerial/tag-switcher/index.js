import bootstrap from '@vuematerial/core/bootstrap'
import MdTagSwitcher from './components/MdTagSwitcher'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdTagSwitcher.name, MdTagSwitcher)
}
