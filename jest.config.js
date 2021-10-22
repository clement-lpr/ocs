module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[tj]s?(x)'],
};
