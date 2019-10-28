#!/usr/bin/env node
const os = require('os');
const linux = require('./linux');
const mac = require('./mac');

const platform = os.platform();

if (platform === 'linux') {
  linux();
} else if (platform === 'darwin') {
  mac();
}
