const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const EA = require("electron-analytics");
EA.init("B1eerWF4ol");
const isDev = require('electron-is-dev');

if (isDev) var client = require('electron-connect').client;

const path = require('path')
const url = require('url')
let mainWindow
const dialog = electron.dialog
function selectDirectory(cb) {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  }, cb)
}
function createWindow () {

  mainWindow = new BrowserWindow({width: 800, height: 600})


  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  if (isDev){ client.create(mainWindow);
  mainWindow.webContents.openDevTools()
}

  mainWindow.on('closed', function () {



    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {


  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {


  if (mainWindow === null) {
    createWindow()
  }
})
module.exports.selectDirectory = selectDirectory;
