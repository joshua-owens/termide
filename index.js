#!/usr/bin/env node
const { vimplug } = require('./shared');
const { osSpecificInstall } = require('./utils');

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
    mac: 'echo -ne "\n" |/usr/bin/ruby -e "$(curl -fssl https://raw.githubusercontent.com/homebrew/install/master/install)"',
    successMessage: 'brew installed!',
  });
}

/**
 * installs neovim via brew
 *
 * @see https://github.com/neovim/neovim
 *
 * @return {promise}
 */
async function neovim() {
  await osSpecificInstall({
    installingMessage: 'instaling neovim with brew...',
    mac: 'brew install neovim',
    successMessage: 'neovim installed!',
  });
  await vimplug();
}


(async function run() {
  await brew();
  neovim();
}());
