import bootstrap from '@vuematerial/core/bootstrap'
import MdField from './components/MdField.vue'
import MdInput from './components/MdInput.vue'

export default (Vue) => {
  bootstrap(Vue)
  Vue.component(MdField.name, MdField)
  Vue.component(MdInput.name, MdInput)
}
