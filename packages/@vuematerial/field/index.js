import bootstrap from '@vuematerial/core/bootstrap'
import MdField from './components/MdField'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdField.name, MdField)
}
