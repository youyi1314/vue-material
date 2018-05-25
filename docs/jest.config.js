module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '<rootDir>/docs/node_modules/vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': '<rootDir>/docs/node_modules/jest-transform-stub'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/docs/src/$1'
  },
  snapshotSerializers: ['<rootDir>/docs/node_modules/jest-serializer-vue'],
  testMatch: ['<rootDir>/packages/**/__tests__/*.js']
}
