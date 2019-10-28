const { install } = require('./utils.js');

/**
 * Runs linux specific installs
 *
 * return {Promise}
 */
async function linux() {
  neovim()
}

/**
 * Installs neovim via the neovim ppa
 *
 * @return {Promise}
 */
async function neovim() {
  await install({
    installingMessage: 'Instaling neovim...',
    command: 'sudo add-apt-repository ppa:neovim-ppa/stable -y && sudo apt-get update && sudo apt-get install neovim -y',
    successMessage: 'neovim installed!',
  });
}

module.export = linux;
