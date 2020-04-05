#!/usr/bin/env node
const os = require('os');
const vim = require('./vim');
const theme = require('./theme');
const ag = require('./ag');
const zsh = require('./zsh');
const tmux = require('./tmux');
const colorls = require('./colorls');

const installers = [
  vim,
//  theme,
//  ag,
//  zsh,
//  tmux,
//  colorls,
];

(async function run() {
  const platform = os.platform();
  installers.forEach(({ linux, mac }) => {
    if (platform === 'linux') {
      linux();
    } else if (platform === 'darwin') {
      mac();
    }
  });
})();

