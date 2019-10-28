const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function mac() {
  brew();
}

async function brew() {
  console.log('Installing Brew...');
  let { stdout, stderr } = await exec('echo -ne "\n" |/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"');
  console.log(stdout); 
  console.log('Brew installed!');
}

module.exports = mac;
