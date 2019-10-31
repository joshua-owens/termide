const util = require('util');
const exec = util.promisify(require('child_process').exec);

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

module.exports = { install };
