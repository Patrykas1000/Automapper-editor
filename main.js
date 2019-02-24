
const electron = require("electron");
const {app, BrowserWindow, Menu} = electron;
const fs = require("fs");
const path = require("path");
const url = require("url");
const appDir = app.getPath("userData")

/** @type BrowserWindow */
let win;

app.on("ready", ()=>{
	win = new BrowserWindow();
	win.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file",
		slashes: true
	}));

	
	win.on("closed", ()=>{
		win = null;
	});


	win.show();
	

});

