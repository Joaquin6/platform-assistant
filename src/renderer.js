// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const os = require('os');

const chalk = require('chalk');
const buglog = require('buglog');

const log = buglog('renderer');

log('\n\n');
log(`\tProcess ID (pid):\t${chalk.yellow(process.pid)}`);
log(`\tCurrent Directory:\t${process.cwd()}`);
log(`\tNode Version:\t\t${process.versions.node}`);
log(`\tChromium:\t\t${process.versions.chrome}`);
log(`\tElectron:\t\t${process.versions.electron}`);
log('\n');

const headerEl = document.getElementById("main-header");
headerEl.innerHTML = `Running Platform ${os.type()}`;
