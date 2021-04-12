const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 230,
  });

  win.resizable = false;
  win.menuBarVisible = false;

  win.setAlwaysOnTop(true);
  win.setPosition(1024, 0);

  win.loadFile('./index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
