const fs = require('fs');
const { download, spinner } = require('../utils');

const execPath = '/tmp/vim';

function mock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function changeAppImagePermissions() {
  return new Promise((resolve, reject) => {
    fs.chmod(execPath, 755, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function downloadAppImage() {
  return new Promise((resolve) => {
    const appImage = fs.createWriteStream(execPath);
    const downloadUrl = 'https://github.com/neovim/neovim/releases/download/stable/nvim.appimage';

    download(downloadUrl, appImage)
      .then(resolve);
  });
}

function linux() {
  const tasks = [
    {
      title: 'Downloading nvim.appimage',
      task: downloadAppImage,
    },
    {
      title: 'Making nvim.appimage executable',
      task: changeAppImagePermissions,
    },
    {
      title: 'Test 3',
      task: mock,
    },
  ];
  return spinner(tasks);
}

module.exports = linux;
