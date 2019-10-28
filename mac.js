const { install } = require('./utils');

async function mac() {
  await brew();
  await neovim();
}

async function brew() {
  await install({
    installingMessage: 'Installing Brew...',
    command: 'echo -ne "\n" |/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"',
    successMessage: 'Brew installed!',
  });
}

async function neovim() {
  await install({
    installingMessage: 'Instaling neovim with Brew...',
    command: 'brew install neovim',
    successMessage: 'neovim installed!',
  });
}

module.exports = mac;
