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
  console.log('\x1b[36m%s\x1b[0m', `${installingMessage} \x1b[0m`);
  const { stdout, stderr } = await exec(command);
  console.log(stdout);
  console.log('\x1b[32m', `${successMessage} \x1b[0m`);
}


module.exports = { install };
