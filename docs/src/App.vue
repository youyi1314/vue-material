<template>
  <div v-if="loaded" id="app" class="app">
    <AppSidebar />
    <RouterView />
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import AppSidebar from '@/components/AppSidebar.vue'
  import { getDocumentLocale, getGlobalMessages, setMessages } from '@/i18n'

  @Component({
    components: {
      AppSidebar
    }
  })
  export default class App extends Vue {
    loaded = false

    async created () {
      const documentLanguage = getDocumentLocale()
      const messages = await getGlobalMessages(documentLanguage)

      await setMessages(documentLanguage, messages)
      this.loaded = true
    }
  }
</script>

<style lang="scss">
  body {
    overflow: hidden;
  }

  @import '~vue-material/vue-material.scss';
  @import '~@vuematerial/theme/presets/neo/neo.scss';
  @import '~@vuematerial/theme/presets/neo/neo-dark.scss';
  @import '~@vuematerial/theme/presets/default/default.scss';
  @import '~@vuematerial/theme/presets/rally/rally.scss';
  @import '~@vuematerial/theme/presets/crane/crane.scss';
  @import '~@vuematerial/theme/presets/shrine/shrine.scss';
</style>

<style lang="scss" scoped>
  .app {
    height: 100vh;
    display: flex;
  }
</style>
