import bootstrap from '@vuematerial/core/bootstrap'
import MdSvgLoader from './components/MdSvgLoader'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdSvgLoader.name, MdSvgLoader)
}
