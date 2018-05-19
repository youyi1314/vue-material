<template>
  <div class="app" id="app" v-if="loaded">
    <AppSidebar />
    <RouterView />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import AppSidebar from '@/components/AppSidebar.vue'
  import { getDocumentLocale, getGlobalMessages, setMessages } from '@/i18n'

  @Component({
    components: {
      AppSidebar
    }
  })
  export default class App extends Vue {
    loaded:boolean = false

    async created () {
      const documentLanguage:string = getDocumentLocale()
      const messages:any = await getGlobalMessages(documentLanguage)

      await setMessages(documentLanguage, messages)
      this.loaded = true
    }
  }
</script>

<style lang="scss">
  body {
    overflow: hidden;
  }
</style>

<style lang="scss" src="@vuematerial/base/base.scss"></style>
<style lang="scss" src="@vuematerial/themes/neo/light.scss"></style>

<style lang="scss" scoped>
  .app {
    height: 100vh;
    display: flex;
  }
</style>
