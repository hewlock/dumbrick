const isDev = require('electron-is-dev');
const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});


	if (isDev) {
		win.loadURL('http://localhost:3000');
		win.webContents.openDevTools({ mode: 'detach' });
	}
	else {
		win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
	}
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
