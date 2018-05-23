import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n()

export default i18n

async function getMessages (language, path) {
  const defaultLanguage = 'en-US'

  async function importFile (language) {
    let filePath = ''

    if (path) {
      filePath += `${language}/${path}`
    } else {
      filePath += `${language}/index`
    }

    return import(`./${filePath}`)
  }

  try {
    return importFile(language)
  } catch (error) {
    return importFile(defaultLanguage)
  }
}

export function getDocumentLocale () {
  return document.documentElement.lang
}

export async function getGlobalMessages (language) {
  const { default: messages } = await getMessages(language)

  return messages
}

export async function getPageMessages (language, page) {
  const { default: messages } = await getMessages(language, `pages/${page}`)

  return messages
}

export async function setMessages (language, messages) {
  i18n.locale = language
  i18n.mergeLocaleMessage(language, messages)

  return Promise.resolve(i18n)
}
