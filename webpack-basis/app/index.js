/* eslint-disable */
if (module.hot) {
  module.hot.accept()
}
/* eslint-enable */

import $ from 'jquery' // eslint-disable-line
import moment from 'moment'
import 'moment/locale/zh-cn' // 由于忽略了语言包的引入，所以需要单独引入我们所需的语言包
import '@style/app'

moment.locale('zh-cn')
