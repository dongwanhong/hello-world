// 引入 bootstrap 的 css 文件
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入自定义的动画
import './styles/animates/animates.less';
// 引入angular
import Angular from 'angular';
// 引入angular-animate
// import 'angular-animate';
// 定义一个angular模块
let App = Angular.module('app', [require('angular-animate')]);
// 引入自定义的指令文件
require('./templates/global-tips/global-tips.js')(App);