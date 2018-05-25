import bootstrap from '@vuematerial/core/bootstrap'
import MdAvatar from './components/MdAvatar'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdAvatar.name, MdAvatar)
}
