module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    indent: 0,
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1
      }
    ],
    'vue/max-attributes-per-line': [
      4,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
}
