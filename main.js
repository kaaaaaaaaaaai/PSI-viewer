var electron = require("electron");
var server = require("./server");
const url = require('url');
const path = require('path');

electron.app.on("ready", function () {
    var main = new electron.BrowserWindow({width: 800, height: 600});
    main.on("closed", electron.app.quit);
    main.webContents.openDevTools();
    main.loadURL("http://127.0.0.1:3001");
});
