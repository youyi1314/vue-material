module.exports = {
  root: true,
  globals: {
    import: true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/strongly-recommended'
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
