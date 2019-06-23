module.exports = {
  processors: [],
  plugins: [],
  extends: [
    // 继承的规则
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  rules: {
    // 指定特定规则
    'rule-empty-line-before': [
      'always',
      {
        severity: 'error'
      }
    ]
  }
}
