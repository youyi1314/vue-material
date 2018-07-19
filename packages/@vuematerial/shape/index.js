import bootstrap from '@vuematerial/core/bootstrap'
import MdShape from './components/MdShape'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdShape.name, MdShape)
}
