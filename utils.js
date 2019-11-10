const util = require('util');
const exec = util.promisify(require('child_process').exec);
const os = require('os');

/**
 * Runs an install command.
 *
 * @param {String} installingMessage message
 * @param {String} command
 * @param {String} successMessage
 *
 * @returns Promise
 */
async function install({ installingMessage, command, successMessage }) {
  const resetColor = '\x1b[0m';
  console.log(`\x1b[36m%s${resetColor}`, installingMessage);
  const { stdout, stderr } = await exec(command);

  if (stderr) {
    console.log(`\x1b[31m${resetColor}`, stderr);
  }

  console.log(stdout);
  console.log(`\x1b[32m${resetColor}`, successMessage);
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
    await install({
      installingMessage,
      successMessage,
      command: linux,
    });
  } else if (mac && platform === 'darwin') {
    await install({
      installingMessage,
      successMessage,
      command: mac,
    });
  }
}

module.exports = { install, osSpecificInstall };
