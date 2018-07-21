const electron = require('electron');
const app = electron.app;//控制应用生命周期的模块
const BrowserWindow = electron.BrowserWindow;//创建原生浏览器窗口的模块
const path = require('path');

//保持一个对于 Window 对象的全局引用，不然，当 JavaScript 被 GC 时 Window 会被自动关闭
var mainWindow = null;

// 当所有窗口被关闭了，退出
app.on('window-all-close',function() {
	//在 OS X 上，通常用户在明确地按下 cmd + Q 之前，应用会保持活动状态
	if(process.platform != 'darwin') {
		app.quit();
	}
});

//当 Electron 完成了初始化并且准备创建浏览器窗口的时候，这个方法就被调用
app.on('ready',function() {
	//创建浏览器窗口
	mainWindow = new BrowserWindow({width:800,height:600});
	//加载应用的 index.html
	mainWindow.loadURL(path.join(__dirname,'app-web/index.html'));
	//打开开发者工具
	mainWindow.openDevTools();
	//当 window 被关闭，这个事件会被发出
	mainWindow.on('close',function() {
		//取消引用 window 对象，如果你的应用支持多窗口的话，通常会把多个 window 对象存放在一个数组里面
		mainWindow = null;
	});
});

// main process 和 web page 通信 In main process
const ipcMain = electron.ipcMain;
ipcMain.on('asynchronous-message', function(event, arg) {
  console.log(arg);  // prints "say hello"
  event.sender.send('asynchronous-reply', 'Hello world');
});
