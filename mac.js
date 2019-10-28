const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function mac() {
  brew().then(() => neovim());
}

async function brew() {
  console.log('Installing Brew...');
  const { stdout, stderr } = await exec('echo -ne "\n" |/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"');
  console.log(stdout); 
  console.log('Brew installed!');
}

async function neovim() {
  console.log('Instaling NeoVim with Brew...')
  const { stdout, stderr } = await exec('brew install neovim');
  console.log(stdout); 
  console.log('NeoVim installed!');
}

module.exports = mac;
