const os = require('os');
const { createSymlink, osSpecificInstall, } = require('../utils');

async function conf() {
  const path = `${os.homedir()}/.tmux.conf`
  const termideTmuxConf = `${__dirname}/.tmux.conf`

  await createSymlink(termideTmuxConf, path)
}

async function tmux() {
  conf()
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
