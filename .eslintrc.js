module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false,
      },
    ],
    'no-console': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/camelcase': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'vue/no-multiple-template-root': 0,
    camelcase: [
      'off',
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
  },
}