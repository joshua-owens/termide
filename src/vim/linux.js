const fs = require('fs');
const https = require('https');
const { spinner } = require('../utils');

function mock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function downloadAppImage() {
  return new Promise((resolve) => {
    const appImage = fs.createWriteStream('/tmp/nvim.appimage');
    const downloadUrl = 'https://github.com/neovim/neovim/releases/download/stable/nvim.appimage';

    https.get(downloadUrl, (response) => {
      response
        .pipe(appImage)
        .on('finish', resolve);
    });
  });
}

function linux() {
  const tasks = [
    {
      title: 'Downloading nvim.appimage',
      task: downloadAppImage,
    },
    {
      title: 'Test 2',
      task: mock,
    },
    {
      title: 'Test 3',
      task: mock,
    },
  ];
  return spinner(tasks);
}

module.exports = linux;
