#!/usr/bin/env node
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const linux = require('./linux');
const mac = require('./mac');

const platform = os.platform();

if (platform === 'linux') {
  linux();
} else if (platform === 'darwin') {
  mac();
}

async function vimplug() {

}

