#!/usr/bin/env node
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

console.log('hello world',os.platform());


if (os.platform() === 'linux') {
  neovim().then(() => console.log('hello?'))
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

