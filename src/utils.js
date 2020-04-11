const https = require('https');
const { spawn } = require('child_process');
const fs = require('fs');
const Listr = require('listr');


/**
 * Executes a bash command
 *
 * @param {String} command
 * @param {Array} args
 *
 * @returns Promise
 */
async function bash({
  command, args,
}) {
  return new Promise((resolve, reject) => {
    try {
      const process = spawn(command, args);

      process.stdout.on('data', (data) => {
        // TODO create log file
      });

      process.stderr.on('data', (data) => {
        // TODO create log file
      });

      process.on('close', (code) => {
        resolve(code);
      });
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Downloads a given url to the specified file.
 *
 * This function will follow redirects paths - namely used for nvim appimage
 *
 * Inspired by the request library
 *
 * @see https://github.com/request/request/blob/master/lib/redirect.js#L50
 *
 * @param {String} downloadUrl
 * @param {String} file
 *
 * @return {Promise}
 */
function download(downloadUrl, file) {
  return new Promise((resolve, reject) => {
    https.get(downloadUrl, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400) {
        if (response.headers && response.headers.location) {
          resolve(download(downloadUrl, file));
        } else {
          reject(new Error(`Couldn't get file. Status code: ${response.statusCode}`));
        }
      } else {
        response
          .pipe(file)
          .on('finish', resolve);
      }
    });
  });
}

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
 * Wrapper function for terminal spinner library
 *
 * @see https://github.com/SamVerschueren/listr
 *
 * @param {Array} tasks
 * @param {Object} options
 *
 * @return {Listr}
 */
function spinner(tasks, options = {}) {
  return new Listr(tasks, options);
}

module.exports = {
  bash,
  download,
  ensureFilePathExists,
  spinner,
};
