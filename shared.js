const fs = require('fs');
const readline = require('readline');
const { install } = require('./utils');

/**
 * Installs vim-plug and runs :PlugInstall
 *
 * This function is intended to be run AFTER neovim
 * has been installed
 *
 * @see https://github.com/junegunn/vim-plug
 *
 * @return {Promise}
 */
async function vimplug() {
  const vimplugLog = '/tmp/vim-plug.log';

  await install({
    installingMessage: 'Installing vim-plug...',
    command: 'curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim',
    successMessage: 'vim-plug installed!',
  });

  await install({
    installingMessage: 'Installing neovim plugins...',
    command: `nvim +'PlugInstall' +'%w ${vimplugLog}' +qa`,
    successMessage: '',
  });

  const reader = readline.createInterface({
    input: fs.createReadStream(vimplugLog),
    output: process.stdout,
  });

  reader.on('close', () => console.log('\x1b[32m', 'neovim plugins installed!'));
}

module.exports = { vimplug };
