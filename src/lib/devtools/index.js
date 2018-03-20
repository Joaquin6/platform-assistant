import chalk from 'chalk';
import buglog from 'buglog';

import installExt, { REACT_DEVELOPER_TOOLS } from './tools';

const log = buglog('lib', 'devtools');

export function install () {
	log('installing devtools');

	installExt(REACT_DEVELOPER_TOOLS)
		.then((name) => log(`Added Extension:  ${name}`))
		.catch((err) => log('An error occurred: ', err));
}
