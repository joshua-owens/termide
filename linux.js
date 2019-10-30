const { install } = require('./utils.js');
const { vimplug } = require('./shared');

/**
 * Installs neovim via the neovim ppa
 *
 * @return {Promise}
 */
async function neovim() {
  install({
    installingMessage: 'Installing python-neovim',
    command: 'sudo apt install python-neovim && sudo apt install python3-neovim',
    successMessage: 'python-neovim installed!',
  });
  await install({
    installingMessage: 'Instaling neovim...',
    command: 'sudo add-apt-repository ppa:neovim-ppa/stable -y && sudo apt-get update && sudo apt-get install neovim -y',
    successMessage: 'neovim installed!',
  });
  await vimplug();
}

/**
 * Runs linux specific installs
 *
 * return {Promise}
 */
async function linux() {
  await neovim();
}

module.export = linux;
