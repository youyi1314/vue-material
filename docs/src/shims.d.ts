import Vue from 'vue'

type SassLoader = {
  global: any
}

declare module '*.vue' {
  export default Vue
}

declare module 'sass-extract-loader*' {
  const sassLoader: SassLoader

  export = sassLoader
}
