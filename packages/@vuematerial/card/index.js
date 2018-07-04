import bootstrap from '@vuematerial/core/bootstrap'
import MdCard from './components/MdCard'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdCard.name, MdCard)
}
