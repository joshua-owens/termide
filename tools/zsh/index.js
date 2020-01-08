const { install } = require('../utils');
// @TODO setup spaceship
// @TODO create link with repo .zshrc to system .zshrc
async function zsh() {
  await install({
    installingMessage: 'Installing zsh',
    command: 'sh',
    args: [
      '-c',
      '"$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"'
    ],
    successMessage: 'zsh installed!'
  });
}

module.exports = {
  installer: zsh,
}
