import bootstrap from '@vuematerial/core/bootstrap'
import MdToolbar from './components/MdToolbar'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdToolbar.name, MdToolbar)
}
