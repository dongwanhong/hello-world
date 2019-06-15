module.exports = {
  // 解析器用于解析代码
  parser: 'babel-eslint',
  // 使用的扩展库
  extends: ['airbnb'],
  // 环境，可以设置环来做区别判断
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  // 第三方插件
  plugins: [
    'react',
    'jsx-a11y'
  ],
  // 解析器配置
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  // 规则配置
  rules: {
    // enable additional rules
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0
  }
};