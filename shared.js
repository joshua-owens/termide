const fs = require('fs');
const os = require('os');
const readline = require('readline');
const { install } = require('./utils');

/**
 * Sets up the config file for neovim
 *
 * @return {Promise}
 */
async function initvim() {
  const path = `${os.homedir()}/.config/testnvim`;
  const filePath = `${path}/init.vim`;
  const termideZshrcPath = `${__dirname}/dotfiles/.zshrc`;

  await (async () => {
    fs.stat(filePath, (fileNotFound, stats) => {
      if (fileNotFound) {
        fs.mkdir(path, (errorCreatingDirs) => {
          if (errorCreatingDirs.code !== 'EEXIST') {
            throw errorCreatingDirs;
          }
        });
      }
      stats.isFile(); // Will throw an error if its not a file
    });
  })();

  fs.appendFile(filePath, `source ${termideZshrcPath}`, (errorWritingToFile) => {
    if (errorWritingToFile) {
      throw errorWritingToFile;
    }
    console.log('.zshrc sourced!');
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

module.exports = { vimplug };
