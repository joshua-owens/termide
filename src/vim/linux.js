const { spinner } = require('../utils');

function mock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function linux() {
  const tasks = [
    {
      title: 'Test 1',
      task: mock,
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
