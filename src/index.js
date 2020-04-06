const os = require('os');
const Listr = require('listr');
const vim = require('./vim');
const zsh = require('./zsh');
const theme = require('./theme');
const ag = require('./ag');
const tmux = require('./tmux');
const colorls = require('./colorls');

const installers = [
  vim,
  zsh,
  zsh,
  zsh,
  zsh,
  zsh,
  zsh,
  zsh,
  zsh,
  zsh,
  zsh,
//  theme,
//  ag,
//  tmux,
//  colorls,
];

(async function run() {
  const platform = os.platform();
  installers.forEach(async ({ name, linux, mac }) => {
    if (platform === 'linux') {
      await linux();
    } else if (platform === 'darwin') {
      await mac();
    }
  });
}());
