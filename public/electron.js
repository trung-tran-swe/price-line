const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");


function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.removeMenu();

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
    });
    win.loadURL(startUrl);
}

app.on("ready", createWindow);

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
