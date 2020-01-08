const neovim = require('./neovim');
const theme = require('./theme');
const ag = require('./ag');
const zsh = require('./zsh');
const tmux = require('./tmux');
const colorls = require('./colorls');

module.exports = [
  neovim,
  theme,
  ag,
  //zsh,
  tmux,
  colorls,
];
