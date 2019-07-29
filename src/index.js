// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');
// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);

/*
 * Keep a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 */
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    center: true,
    width: 1600,
    height: 1225,
    useContentSize: true,
    resizable: false,
    webPreferences: {
      backgroundColor: '#000000',
      darkTheme: true,
      frame: false,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false
    }
  });

  // And load the index.html of the app.
  mainWindow.loadFile('src/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    /*
     * Dereference the window object, usually you would store windows
     * in an array if your app supports multi windows, this is the time
     * when you should delete the corresponding element.
     */
    mainWindow = null;
  });

  // Open the developer tools console.
  mainWindow.webContents.openDevTools();
}

/*
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  /*
   * On macOS it is common for applications and their menu bar
   * to stay active until the user quits explicitly with Cmd + Q
   */
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  /*
   * On macOS it's common to re-create a window in the app when the
   * dock icon is clicked and there are no other windows open.
   */
  if (mainWindow === null) createWindow();
});

/*
 * In this file you can include the rest of your app's specific main process
 * code. You can also put them in separate files and require them here.
 */

module.exports = mainWindow;
