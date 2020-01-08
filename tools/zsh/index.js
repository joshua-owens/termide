const os = require('os');
const fs = require('fs');
const { install } = require('../utils');


/**
 * Updates the system .zshrc file to import
 * the one in the directory
 */
async function zshrc() {
  const file = `${os.homedir()}/.zshrc`;
  const termideZshrcPath = `${__dirname}/.zshrc`;

  fs.appendFile(file, `\n. ${termideZshrcPath} \n`, (errorWritingToFile) => {
    if (errorWritingToFile) {
      throw errorWritingToFile;
    }
    console.log('zshrc sourced!');
  });
}

/**
 * Installs Oh My ZSH
 *
 * @see https://ohmyz.sh/
 */
async function ohmyzsh() {
  await install({
    installingMessage: 'Installing zsh',
    command: 'sh',
    args: [
      '-c',
      '"$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
    ],
    successMessage: 'zsh installed!',
  });
}

/**
 * Installs the Spaceship ZSH theme
 *
 * @see https://github.com/denysdovhan/spaceship-prompt
 */
async function spaceship() {
  const zshCustom = `${os.homedir()}/.oh-my-zsh/custom`
  await install({
    installingMessage: 'Cloning Spaceship ZSH',
    command: 'git',
    args: [
      'clone',
      'https://github.com/denysdovhan/spaceship-prompt.git',
      `${zshCustom}/themes/spaceship-prompt`,
    ],
    successMessage: 'Spaceship ZSH cloned',
  });
  await install({
    installingMessage: 'Symlinking spaceship',
    command: 'ln',
    args: [
      '-s',
      `"${zshCustom}/themes/spaceship-prompt/spaceship.zsh-theme"`,
      `"${zshCustom}/themes/spaceship.zsh-theme"`,
    ],
    successMessage: 'Spaceship installed'
  })
}

async function zsh() {
  zshrc()
  await ohmyzsh()
  await spaceship()
}

module.exports = {
  installer: zsh,
}
