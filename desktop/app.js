const { app, BrowserWindow, ipcMain } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        frame: false,
        width: 800,
        height: 550
    })
    mainWindow.setMinimumSize(380, 140);
    mainWindow.setMaximumSize(920, 540)
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "pages/main.html"),
        protocol: "file:"
    }))

    ipcMain.on('close', ()=>{
        mainWindow.close()
        mainWindow = null;
    })
})