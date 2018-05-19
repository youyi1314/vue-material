import bootstrap from '@vuematerial/core/bootstrap'
import MdContent from './components/MdContent'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdContent.name, MdContent)
}
