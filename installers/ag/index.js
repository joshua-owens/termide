const { osSpecificInstall } = require('../utils');

async function ag() {
  await osSpecificInstall({
    installingMessage: 'installing the ag (the silver searcher)'
    mac: {
      command: 'brew',
      args: ['install', 'the_silver_searcher']
    },
    linux: {
      command: 'apt-get',
      args: ['install', 'silversearcher-ag']
    },
    successMessage: 'ag installed!'
  });
}

module.exports = {
  installer: ag,
}
