import MdField from './components/MdField.vue'
import MdInput from './components/MdInput.vue'

export default (Vue: any) => {
  Vue.component(MdField.name, MdField)
  Vue.component(MdInput.name, MdInput)
}
