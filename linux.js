
async function linux() {
  neovim()
}

async function neovim() {
  console.log('Installing NeoVim...')
  const { stdout, stderr } = await exec('sudo add-apt-repository ppa:neovim-ppa/stable -y && sudo apt-get update && sudo apt-get install neovim -y');

  if (stderr) {
    console.log('ERROR: ', stderr);
  }
  console.log(stdout)
  console.log('NeoVim Finished!')
}

module.export = linux;
