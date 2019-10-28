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
  console.log(installingMessage);
  const { stdout, stderr } = await exec(command);
  console.log(stdout); 
  console.log(successMessage);
} 

module.exports = { install };
