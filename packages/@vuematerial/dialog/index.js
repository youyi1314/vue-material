import bootstrap from '@vuematerial/core/bootstrap'
import MdDialog from './components/MdDialog'
import MdDialogTitle from './components/MdDialogTitle'
import MdDialogContent from './components/MdDialogContent'
import MdDialogActions from './components/MdDialogActions'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogTitle.name, MdDialogTitle)
  Vue.component(MdDialogContent.name, MdDialogContent)
  Vue.component(MdDialogActions.name, MdDialogActions)
}
