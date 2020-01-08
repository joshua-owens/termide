const neovim = require('./neovim');
const theme = require('./theme');
const ag = require('./ag');
const zsh = require('./zsh');
const tmux = require('./tmux');

module.exports = [
  neovim,
  theme,
  ag,
  zsh,
  tmux,
];
