module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'react'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
