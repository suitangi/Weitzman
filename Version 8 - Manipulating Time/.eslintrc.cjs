module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    ecmaVersion: '2021', // Allows for the parsing of modern ECMAScript features
  },

  extends: [
    'prettier'
  ],

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
  }
}
