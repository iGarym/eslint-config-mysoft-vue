module.exports = {
  rules: {
    'comma-dangle': 'off',
    'for-direction': 'off',
    'getter-return': ['off', {
      'allowImplicit': true
    }],
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'off',
    'no-cond-assign': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'warn'] }] : 'off',
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['off', 'all', {
      'conditionalAssign': true,
      'nestedBinaryExpressions': false,
      'returnAssign': false,
      'ignoreJSX': 'all',
      'enforceForArrowConditionals': false
    }],
    'no-extra-semi': 'warn',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'warn',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-negated-in-lhs': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', {
      'requireStringLiterals': true
    }]
  }
}
