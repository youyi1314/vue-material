import bootstrap from '@vuematerial/core/bootstrap'
import MdDialog from './components/MdDialog'
import MdDialogTitle from './components/MdDialogTitle'
import MdDialogAlert from './components/MdDialogAlert'
import MdDialogConfirm from './components/MdDialogConfirm'
import MdDialogContent from './components/MdDialogContent'
import MdDialogActions from './components/MdDialogActions'

export default Vue => {
  bootstrap(Vue)
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogAlert.name, MdDialogAlert)
  Vue.component(MdDialogConfirm.name, MdDialogConfirm)
  Vue.component(MdDialogTitle.name, MdDialogTitle)
  Vue.component(MdDialogContent.name, MdDialogContent)
  Vue.component(MdDialogActions.name, MdDialogActions)
}
