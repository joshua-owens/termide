const { spawn } = require('child_process');
const os = require('os');
const fs = require('fs');

/**
 * Checks to see if a file path exists. If it does NOT
 * exist the directory in which that file should
 * be in are created.
 *
 * @param {String} path
 * @param {String} file
 *
 * @return {Promise}
 */
function ensureFilePathExists(path, file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (fileNotFound) => {
      if (!fileNotFound) {
        // file exists
        resolve();
      }
      fs.mkdir(path, (errorCreatingDirs) => {
        if (errorCreatingDirs && errorCreatingDirs.code !== 'EEXIST') {
          reject(errorCreatingDirs);
        }
        resolve();
      });
    });
  });
}

/**
 * Runs an install command.
 *
 * @param {String} installingMessage message
 * @param {String} command
 * @param {String} successMessage
 *
 * @returns Promise
 */
async function install({
  installingMessage, command, args, successMessage,
}) {
  return new Promise((resolve, reject) => {
    try {
      const resetColor = '\x1b[0m';
      console.log(`\x1b[36m%s${resetColor}`, installingMessage);
      const process = spawn(command, args);

      process.stdout.on('data', (data) => {
        console.log(`\x1b[36m${data}`);
      });

      process.stderr.on('data', (data) => {
        console.error(`\x1b[33m${data}`);
      });

      process.on('close', (code) => {
        console.log(`\x1b[32m${successMessage}`);
        resolve(code);
      });
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Wrapper function around install for things that
 * have separate installation commands for linux/mac
 *
 * @param {String} installingMessage message
 * @param {String} successMessage
 * @param {String} mac - install command for mac
 * @param {String} linx - install command for linx
 *
 * @returns Promise
 */
async function osSpecificInstall({
  installingMessage, successMessage, mac = null, linux = null,
}) {
  const platform = os.platform();

  if (linux && platform === 'linux') {
    const { command, args } = linux;
    await install({
      installingMessage,
      successMessage,
      command,
      args,
    });
  } else if (mac && platform === 'darwin') {
    const { command, args } = mac;
    await install({
      installingMessage,
      successMessage,
      command,
      args,
    });
  }
}

module.exports = {
  install,
  osSpecificInstall,
  ensureFilePathExists,
};
