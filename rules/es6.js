module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'arrow-body-style': ['warn', 'as-needed', {
      'requireReturnForObjectLiteral': false
    }],
    'arrow-parens': ['error', 'as-needed', {
      'requireForBlockBody': false
    }],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      'allowParens': true
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      'ignoreDestructuring': false,
      'ignoreImport': false,
      'ignoreExport': false
    }],
    'no-var': 'warn',
    'object-shorthand': ['error', 'always', {
      'ignoreConstructors': false,
      'avoidQuotes': false
    }],
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true
    }],
    'prefer-destructuring': ['off', {
      'VariableDeclarator': {
        'array': false,
        'object': true
      },
      'AssignmentExpression': {
        'array': true,
        'object': true
      }
    }, {
        'enforceForRenamedProperties': false
      }],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['off', {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after']
  }
}
