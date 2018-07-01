import { Vue } from 'vue-property-decorator'
import PortalTarget from 'portal-vue/src/components/portal-target'

let portalInstance = null

export default () => {
  PortalTarget.name = 'MdPortalRender'
  PortalTarget.abstract = true

  if (!document.querySelector('.md-portal') || !document.querySelector('.vue-portal-target')) {
    const portalOutlet = document.createElement('div')

    portalInstance = new Vue({
      name: 'MdPortal',
      functional: true,
      render (h) {
        return h(PortalTarget, {
          staticClass: 'md-portal',
          props: {
            name: 'md-portal-root',
            multiple: true
          },
          on: {
            change: () => {
              this.$el.className = 'md-portal'
            }
          }
        })
      }
    })

    document.body.appendChild(portalOutlet)
    portalInstance.$mount(portalOutlet)

    return portalInstance
  }

  return portalInstance
}
