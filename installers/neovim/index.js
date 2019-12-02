const fs = require('fs');
const os = require('os');
const readline = require('readline');
const { install, osSpecificInstall } = require('../utils');

function ensureFilePathExists(path, file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (fileNotFound) => {
      if (!fileNotFound) {
        // file exists
        resolve();
      }
      fs.mkdir(path, (errorCreatingDirs) => {
        if (errorCreatingDirs && errorCreatingDirs.code !== 'EEXIST') {
          reject(errorCreatingDirs);
        }
        resolve();
      });
    });
  });
}

/**
 * Sets up the config file for neovim
 *
 * @return {Promise}
 */
async function initvim() {
  const path = `${os.homedir()}/.config/testnvim`;
  const file = `${path}/init.vim`;
  const termideInitVimPath = `${__dirname}/init.vim`;

  await ensureFilePathExists(path, file);

  fs.appendFile(file, `\n so ${termideInitVimPath} \n`, (errorWritingToFile) => {
    if (errorWritingToFile) {
      throw errorWritingToFile;
    }
    console.log('init sourced!');
  });
}

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

  await initvim();

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

  reader.on('close', () => {
    console.log('\x1b[32m', 'neovim plugins installed!');
    fs.unlink(vimplugLog, (error) => {
      if (error) {
        throw error;
      }
    });
  });

  await install({
    installingMessage: 'Installing COC JS/TS language server...',
    command: 'nvim -c \'CocInstall -sync coc-tsserver coc-vetur coc-angular coc-json coc-html coc-css|q\'',
    successMessage: 'JS/TS language server installed!',
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

module.exports = {
  installer: neovim,
};
