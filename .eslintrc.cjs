module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    '@typescript-eslint',
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    'out/',
    '.eslintrc.js',
    '.eslintrc.cjs',
  ],
};
