import bootstrap from '@vuematerial/core/bootstrap'
import MdField from './components/MdField'
import MdInput from './components/MdInput'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdField.name, MdField)
  Vue.component(MdInput.name, MdInput)
}
