const { install } = require('./utils');


async function vimplug() {
  await install({
    installingMessage: 'Installing vim-plug...',
    command: 'curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim',
    successMessage: 'vim-plug installed!',
  });
}
