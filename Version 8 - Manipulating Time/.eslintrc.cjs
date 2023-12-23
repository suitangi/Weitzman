module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2021' // Allows for the parsing of modern ECMAScript features
  },
  ignorePatterns: [
    '/scripts/jquery-1.12.4.js', 
    '/scripts/jquery-3.1.1.min.js',
    '/scripts/jquery-confirm.min.js',
    '/scripts/jquery-ui.js',
    '/scripts/parameters.js'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    
    'prefer-promise-reject-errors': 'off'
  }
}
