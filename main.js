const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 500,
        height: 580,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: true,
        resizable: false
    })

    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
