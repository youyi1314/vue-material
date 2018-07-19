<template>
  <div :class="{ 'md-focused': isFocused }" class="md-field">
    <slot />

    <div class="md-field-notch">
      <span :style="notchStyles.left" class="md-field-notch-mask left" />
      <span :style="notchStyles.right" class="md-field-notch-mask right" />
    </div>
  </div>
</template>

<script>
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import MdObserveElement from '@vuematerial/core/MdObserveElement'

  const props = {

  }

  @Component({
    props
  })
  export default class MdField extends Vue {
    labelEl = null
    labelMutationObserver = null
    notchStyles = {
      left: {},
      right: {}
    }
    isFocused = false

    @Watch('isFocused')
    onIsFocusedChange () {
      this.setNotchStyles()
    }

    setNotchStyles () {
      requestAnimationFrame(() => {
        const inputPadding = parseInt(getComputedStyle(this.inputEl).paddingLeft, 10)

        if (this.isFocused) {
          this.notchStyles.left = {
            width: `${inputPadding - 4}px`
          }

          this.notchStyles.right = {
            width: `calc(100% - ${(this.labelEl.clientWidth - inputPadding) * 0.75 + 8}px)`
          }
        } else {
          this.notchStyles.left = {
            width: this.labelEl.clientWidth / 2 + 4 + 'px'
          }

          this.notchStyles.right = {
            width: `calc(100% - ${this.labelEl.clientWidth / 2 + 4}px)`
          }
        }
      })
    }

    mounted () {
      this.labelEl = this.$el.querySelector('label')
      this.inputEl = this.$el.querySelector('input')

      if (this.labelEl && this.inputEl) {
        this.setNotchStyles()
        this.labelMutationObserver = MdObserveElement(this.labelEl, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        }, this.setNotchStyles)
      }

      if (this.inputEl) {
        this.inputEl.addEventListener('focus', () => {
          this.isFocused = true
        })
        this.inputEl.addEventListener('blur', () => {
          this.isFocused = false
        })
      }
    }
  }
</script>
