const fs = require('fs');
const os = require('os');
const readline = require('readline');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {
  bash,
  ensureFilePathExists,
} = require('../utils');
const cocExtensions = require('./cocExtensions');
const linux = require('./linux');

/**
 * Sets up the config file for neovim
 *
 * @return {Promise}
 */
async function initvim() {
  const path = `${os.homedir()}/.config/nvim`;
  const file = `${path}/init.vim`;
  const termideInitVimPath = `${__dirname}/init.vim`;

  await ensureFilePathExists(path, file);

  await createSymlink(termideInitVimPath, file);
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
    command: 'curl',
    args: ['-fLo', `${os.homedir()}/.local/share/nvim/site/autoload/plug.vim`, '--create-dirs', 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'],
    successMessage: 'vim-plug installed!',
  });

  // Cant call spawn on this as it exits immediately after nvim
  // is opened not giving the process time to install the plugins
  // and not generating the log file
  await exec(`nvim +'PlugInstall' +'%w ${vimplugLog}' +qa`);

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
    command: 'nvim',
    args: [
      '-c',
      '\'CocInstall',
      '-sync',
      ...cocExtensions,
      '|q\'',
    ],
    successMessage: 'JS/TS language server installed!',
  });
}

/**
 * Neovim install for mac
 *
 * @see https://github.com/neovim/neovim
 *
 * @return {Promise}
 */
async function mac() {
  await bash({
    command: 'brew',
    args: [
      'install',
      'neovim',
    ],
  });
  // await vimplug();
}

module.exports = {
  name: 'Neovim',
  mac,
  linux,
};
