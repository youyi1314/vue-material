import bootstrap from '@vuematerial/core/bootstrap'
import MdButton from './components/MdButton'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdButton.name, MdButton)
}
