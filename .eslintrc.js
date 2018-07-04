module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    'jest/globals': true
  },
  extends: ['plugin:vue/recommended', '@vue/standard'],
  plugins: [
    'jest'
  ],
  rules: {
    indent: 'off',
    'indent-legacy': ['error', 2],
    'max-depth': ['error', 4],
    'max-statements': ['error', 30],
    'max-params': ['error', 5],
    'max-nested-callbacks': ['error', 3],
    complexity: [
      'error',
      {
        max: 6
      }
    ],
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
