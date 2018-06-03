<template>
  <i :class="'md-svg'" v-html="html" />
</template>

<script>
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  let mdSVGStore = {}

  @Component
  export default class MdSvgLoader extends Vue {
    @Prop({ type: String, default: '', required: true })
    mdSrc

    html = null
    error = null

    @Watch('mdSrc')
    onMdSrc () {
      this.html = null
      this.loadSVG()
    }

    isSVG (mimetype) {
      return mimetype.indexOf('svg') >= 0
    }

    setHtml (value) {
      mdSVGStore[this.mdSrc].then((html) => {
        this.html = html

        return this.$nextTick()
      }).then(() => this.$emit('md-loaded'))
    }

    unexpectedError (reject) {
      this.error = `Something bad happened trying to fetch ${this.mdSrc}.`
      reject(this.error)
    }

    loadSVG () {
      if (!mdSVGStore.hasOwnProperty(this.mdSrc)) {
        mdSVGStore[this.mdSrc] = new Promise((resolve, reject) => {
          const request = new window.XMLHttpRequest()

          request.open('GET', this.mdSrc, true)

          request.onload = () => {
            const mimetype = request.getResponseHeader('content-type')

            if (request.status === 200) {
              if (this.isSVG(mimetype)) {
                resolve(request.response)
                this.setHtml()
              } else {
                this.error = `The file ${this.mdSrc} is not a valid SVG.`
                reject(this.error)
              }
            } else if (request.status >= 400 && request.status < 500) {
              this.error = `The file ${this.mdSrc} do not exists.`
              reject(this.error)
            } else {
              this.unexpectedError(reject)
            }
          }

          request.onerror = () => this.unexpectedError(reject)
          request.onabort = () => this.unexpectedError(reject)
          request.send()
        })
      } else {
        this.setHtml()
      }
    }

    mounted () {
      this.loadSVG()
    }
  }
</script>

<style lang="scss">
  .md-svg {
    display: block;

    svg {
      width: 100%;
    }
  }
</style>
