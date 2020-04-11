const fs = require('fs');
const https = require('https');
const { download, spinner } = require('../utils');

function mock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function changeAppImagePermissions() {
  return new Promise((resolve, reject) => {
    fs.chmod('/usr/bin/vim', 755, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

function downloadAppImage() {
  return new Promise((resolve) => {
    const appImage = fs.createWriteStream('/usr/bin/vim');
    const downloadUrl = 'https://github.com/neovim/neovim/releases/download/stable/nvim.appimage';

    console.log('download..');
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
