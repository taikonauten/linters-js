module.exports = {

  rules: {
    'arrow-spacing': [2, {'before': true, 'after': true}],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'comma-dangle': [2, 'only-multiline'],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'curly': [2],
    'eol-last': [2],
    'func-call-spacing': [2, 'never'],
    'indent': [2, 2, {'SwitchCase': 1}],
    'keyword-spacing': [2],
    'linebreak-style': [2, 'unix'],
    'no-console': [2, {'allow': ['warn', 'error', 'assert', 'info']}],
    'no-multiple-empty-lines': [2],
    'no-param-reassign': [2],
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'padding-line-between-statements': [2, { blankLine: 'always', prev: '*', next: 'return' }],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-before-blocks': [2, {
      'functions': 'always',
      'keywords': 'always',
      'classes': 'always'
    }],
    'space-infix-ops': [2],
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
  }
};
