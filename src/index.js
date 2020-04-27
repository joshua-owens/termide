const os = require('os');
const vim = require('./vim');
const zsh = require('./zsh');
const theme = require('./theme');
const ag = require('./ag');
const tmux = require('./tmux');
const colorls = require('./colorls');
const { spinner } = require('./utils');

const prerequisites = {
  mac: [],
  linux: [],
};

const installers = [
  vim,
  zsh,
//  theme,
//  ag,
//  tmux,
//  colorls,
];

(function run() {
  const platform = os.platform();
  const tasks = [];
  installers.forEach(({ name, linux, mac }) => {
    let task;
    if (platform === 'linux') {
      task = linux;
    } else if (platform === 'darwin') {
      task = mac;
    }

    tasks.push({
      title: name,
      task,
    });
  });

  spinner(tasks, { concurrent: true }).run((err) => {
    console.error('Task failed: ', err);
  });
}());
