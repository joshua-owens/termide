#!/usr/bin/env node
const { osSpecificInstall } = require('./tools/utils');
const installers = require('./tools');

/**
 * installs the brew package manager
 *
 * @see https://brew.sh/
 *
 * @return {promise}
 */
async function brew() {
  await osSpecificInstall({
    installingMessage: 'installing brew...',
    mac: {
      command: 'echo',
      args: ['-ne',
        '"\n"',
        '|/usr/bin/ruby',
        '-e',
        '"$(curl -fssl https://raw.githubusercontent.com/homebrew/install/master/install)"'],
    },
    successMessage: 'brew installed!',
  });
}

(async function run() {
  await brew();

  installers.forEach(({ installer }) => {
    installer();
  });
}());
