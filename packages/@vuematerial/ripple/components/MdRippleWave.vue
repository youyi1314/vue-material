<template>
  <transition name="md-ripple" appear>
    <span class="md-ripple-wave" />
  </transition>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class MdRipple extends Vue {}
</script>
