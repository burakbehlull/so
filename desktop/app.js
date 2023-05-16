const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 550
    })
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "pages/main.html"),
        protocol: "file:"
    }))
})