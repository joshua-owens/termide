const { install, osSpecificInstall } = require('../utils');

async function ruby() {
  osSpecificInstall({
    installingMessage: 'Installing ruby...',
    mac: {
      command: 'brew',
      args: ['install', 'ruby'],
    },
    linux: {
      command: 'apt-get',
      args: ['install', 'ruby-full'],
    },
    successMessage: 'Ruby installed!'
  });
}

async function colorls() {
  await ruby();
  await install({
    installingMessage: 'Installing colorls...',
    command: 'sudo',
    args: ['gem', 'install', 'colorls'],
    successMessage: 'colorls installed!',
  });
}

module.exports = {
  installer: colorls,
}
