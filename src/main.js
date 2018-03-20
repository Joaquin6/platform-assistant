import os from 'os';
import url from 'url';
import path from 'path';

import chalk from 'chalk';
import buglog from 'buglog';
import electron from 'electron';

import * as devtools from './lib/devtools';
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const log = buglog('app');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let chromiumExtPath;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (process.env.NODE_ENV === 'development') {
    devtools.install();
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }



  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    log(`${chalk.yellow('closing application')}`);
    BrowserWindow.removeDevToolsExtension(chromiumExtPath);
    mainWindow = null;
  });

  log('\n\n');
  log(`\tProcess ID (pid):\t${chalk.yellow(process.pid)}`);
  log(`\tCurrent Directory:\t${process.cwd()}`);
  log(`\tNode Version:\t\t${process.versions.node}`);
  log(`\tChromium:\t\t${process.versions.chrome}`);
  log(`\tElectron:\t\t${process.versions.electron}`);
  log('\n');
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (process.env.NODE_ENV === 'development') {
    let chromiumVersion = '3.1.0_0';
    let chromiumExtensions ='~/.config/chromium/Default/Extensions';
    if (os.platform() === 'darwin') {
      chromiumExtensions ='~/Library/Application Support/Google/Chrome/Default/Extensions';
    }

    chromiumExtPath = `${chromiumExtensions}/${chromiumVersion}`;

    BrowserWindow.addDevToolsExtension(chromiumExtPath);
  }
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

export default app;
