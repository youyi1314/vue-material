import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n()

export default i18n

async function getMessages(language: string, path?: string): Promise<any> {
  const defaultLanguage = 'en-US'

  async function importFile(language: string): Promise<any> {
    let filePath: string = ''

    if (path) {
      filePath += `${language}/${path}`
    } else {
      filePath += `${language}/index`
    }

    return await import(`./${filePath}`)
  }

  try {
    return await importFile(language)
  } catch (error) {
    return await importFile(defaultLanguage)
  }
}

export function getDocumentLocale(): string {
  return document.documentElement.lang
}

export async function getGlobalMessages(language: string): Promise<any> {
  const { default: messages } = await getMessages(language)

  return messages
}

export async function getPageMessages(
  language: string,
  page: string
): Promise<any> {
  const { default: messages } = await getMessages(language, `pages/${page}`)

  return messages
}

export async function setMessages(
  language: string,
  messages: any
): Promise<any> {
  i18n.locale = language
  i18n.mergeLocaleMessage(language, messages)

  return Promise.resolve(i18n)
}
