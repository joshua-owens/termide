const { install } = require('./utils');

/**
 * Runs mac specific installs
 */
async function mac() {
  await brew();
  await neovim();
}

/**
 * Installs the Brew package manager
 *
 * @see https://brew.sh/
 *
 * @return {Promise}
 */
async function brew() {
  await install({
    installingMessage: 'Installing Brew...',
    command: 'echo -ne "\n" |/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"',
    successMessage: 'Brew installed!',
  });
}

/**
 * Installs neovim via Brew
 *
 * @see https://github.com/neovim/neovim
 *
 * @return {Promise}
 */
async function neovim() {
  await install({
    installingMessage: 'Instaling neovim with Brew...',
    command: 'brew install neovim',
    successMessage: 'neovim installed!',
  });
}

module.exports = mac;
