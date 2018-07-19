<script>
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import MdTagSwitcher from '@vuematerial/tag-switcher/MdTagSwitcher'

  const props = {
    mdTag: {
      type: String,
      default: 'div'
    },
    mdAngles: {
      type: [Number, String, Array],
      default: 0
    },
    mdRadius: {
      type: [Number, String, Array],
      default: 0
    },
    mdPaddingFollowsAngles: {
      type: Boolean,
      default: false
    }
  }

  @Component({
    props,
    components: {
      MdTagSwitcher
    }
  })
  export default class MdShape extends Vue {
    shapeStyles = ''
    paddingFollowsAngle = null

    @Watch('mdRadius')
    onCornerChange () {
      this.setShapeStyles()
    }

    @Watch('mdAngles')
    onAnglesChange () {
      this.setShapeStyles()
    }

    mounted () {
      this.setShapeStyles()
    }

    render (createElement) {
      let children = this.$slots.default

      if (!children) {
        return
      }

      let rawChild = children[0]
      const shapeOpts = this.getShapeStyles(rawChild.data || {})

      if (this.shouldRenderParentTag(children)) {
        return createElement(this.mdTag, shapeOpts, children)
      }

      const { tag, children: slot } = rawChild.componentOptions
      const newChild = createElement(tag, {
        ...rawChild.data,
        ...shapeOpts
      }, slot)

      return newChild
    }

    shouldRenderParentTag (children) {
      const hasValidChildren = children.some((c) => c.tag)

      return children.length > 1 || !hasValidChildren || this.mdTag !== 'div'
    }

    shouldRenderNewChildren (rawChild) {
      return rawChild.data && this.shapeStyles
    }

    getShapeStyles ({ staticClass: cssClass, style }) {
      const shapeClass = 'md-shape'
      const staticClass = cssClass ? `${shapeClass} ${cssClass}` : shapeClass

      return {
        staticClass,
        style: {
          ...style,
          ...this.shapeStyles
        }
      }
    }

    getCorners (source) {
      if (!Array.isArray(source)) {
        return new Array(4).fill(source)
      }

      return source
    }

    getAngles () {
      return this.getCorners(this.mdAngles)
    }

    getRadius () {
      return this.getCorners(this.mdRadius)
    }

    hasInitialPadding ({ paddingTop, paddingRight, paddingBottom, paddingLeft }) {
      const top = parseInt(paddingTop, 10)
      const right = parseInt(paddingRight, 10)
      const bottom = parseInt(paddingBottom, 10)
      const left = parseInt(paddingLeft, 10)
      const hasPadding = top || right || bottom || left

      return hasPadding
    }

    getBorderRadius (radius, computedStyle) {
      const getCornerRadius = (index) => {
        const defaultRadius = computedStyle.borderBottomLeftRadius

        if (this.mdRadius) {
          return radius[index] + 'px'
        }

        return defaultRadius
      }

      return this.getAngles().map((angle, index) => angle ? 0 : getCornerRadius(index)).join(' ')
    }

    getPadding (angles, computedStyle) {
      const numberedAngles = angles.map((angle) => parseInt(angle, 10))
      const getMaxPadding = () => Math.max.apply(null, numberedAngles).toString() + 'px'

      if (this.mdPaddingFollowsAngles) {
        return getMaxPadding()
      }

      return false
    }

    cssSupportsDropShadow () {
      return CSS.supports('filter', 'drop-shadow(0 0 1px #000')
    }

    cssSupportsClipPath () {
      return CSS.supports('clip-path', 'polygon(100% 0)')
    }

    hasAnglesProp () {
      return this.mdAngles !== 0 && this.mdAngles
    }

    hasRadiusProp () {
      return this.mdRadius !== 0 && this.mdRadius
    }

    canUseAngles () {
      return this.cssSupportsDropShadow() && this.cssSupportsClipPath() && this.hasAnglesProp()
    }

    setShapeStyles () {
      const computedStyle = getComputedStyle(this.$el)
      const radius = this.getRadius()
      const borderRadius = this.getBorderRadius(radius, computedStyle)

      if (this.canUseAngles()) {
        const angles = this.getAngles()
        const padding = this.getPadding(angles, computedStyle)
        const [leftTop, rightTop, rightBottom, leftBottom] = angles
        const clipPath = `polygon(` +
          `0 ${leftTop}px,` +
          `${leftTop}px 0,` +
          `calc(100% - ${rightTop}px) 0,` +
          `100% ${rightTop}px,` +
          `100% calc(100% - ${rightBottom}px),` +
          `calc(100% - ${rightBottom}px) 100%,` +
          `${leftBottom}px 100%,` +
          `0 calc(100% - ${leftBottom}px)` +
        `)`

        this.shapeStyles = {
          padding,
          borderRadius,
          clipPath
        }
      } else if (this.hasRadiusProp()) {
        const padding = this.getPadding(radius, computedStyle)

        this.shapeStyles = {
          borderRadius,
          padding
        }
      } else {
        this.shapeStyles = {}
      }
    }
  }
</script>

<style lang="scss">
  @import "~@vuematerial/motion/variables";

  .md-shape {
    transition: $md-motion-default;
    transition-property: color, background-color, border-radius, box-shadow, clip-path;
  }
</style>
