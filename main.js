const linear = require('linear-solve');
const path   = require('path');
const url    = require('url');
const {app, BrowserWindow} = require('electron');
let win;
function createWindow(){
	win = new BrowserWindow({
		width: 700,
		height: 420,
		icon: __dirname + '/img/icon.jpg',
		autoHideMenuBar: true
	});
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));
	win.on('closed', ()=>{
		win = null;
	});
}
app.on('ready', createWindow);
app.on('window-on-closed', ()=>{
	app.quit();
});