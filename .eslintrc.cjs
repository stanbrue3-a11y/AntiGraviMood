/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  extends: ['expo', 'prettier'],
  ignorePatterns: [
    'dist/',
    'web-build/',
    'android/',
    'ios/',
    '.expo/',
    'coverage/',
    'scripts/',
    'src/data/registry/',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'import/first': 'off',
    'import/namespace': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
  },
};
