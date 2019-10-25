#!/usr/bin/env node
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const linux = require('./linux');
const mac = require('./mac');

const platform = os.platform();

if (platform === 'linux') {
  neovim().then(() => console.log('hello?'))
} else if (platform === 'darwin') {
  mac();
}

async function neovim() {
  console.log('Installing NeoVim..')
  let { stdout, stderr } = await exec('sudo add-apt-repository ppa:neovim-ppa/stable -y && sudo apt-get update && sudo apt-get install neovim -y');

  if (stderr) {
    console.log('ERROR: ', stderr);
  }
  console.log(stdout)
  console.log('NeoVim Finished!')
}

async function nvm() {

}
