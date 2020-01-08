const { osSpecificInstall } = require('../utils');

async function tmux() {
  await osSpecificInstall({
    installingMessage: 'installing tmux',
    mac: {
      command: 'brew',
      args: ['install', 'tmux']
    },
    linux: {
      command: 'apt-get',
      args: ['install', 'tmux']
    },
    successMessage: 'tmux installed!'
  });
}

module.exports = {
  installer: tmux,
}
