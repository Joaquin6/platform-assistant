// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import os from 'os';

import chalk from 'chalk';
import buglog from 'buglog';

const log = buglog('renderer');
const osType = os.type();
const osPlatform = os.platform();

log('\n\n');
log(`\tProcess ID (pid):\t${chalk.yellow(process.pid)}`);
log(`\tCurrent Directory:\t${process.cwd()}`);
log(`\tNode Version:\t\t${process.versions.node}`);
log(`\tChromium:\t\t${process.versions.chrome}`);
log(`\tElectron:\t\t${process.versions.electron}`);
log('\n');

const headerEl = document.getElementById("main-header");
headerEl.innerHTML = `Running Platform ${osType}`;
