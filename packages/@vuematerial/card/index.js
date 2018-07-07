import bootstrap from '@vuematerial/core/bootstrap'
import MdCard from './components/MdCard'
import MdCardContent from './components/MdCardContent'
import MdCardActions from './components/MdCardActions'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdCard.name, MdCard)
  Vue.component(MdCardContent.name, MdCardContent)
  Vue.component(MdCardActions.name, MdCardActions)
}
