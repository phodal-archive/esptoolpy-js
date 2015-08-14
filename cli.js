#!/usr/bin/env node

var program = require('commander');
var ESP = require('./esptoolpy');

program
  .version('0.0.5')
  .option('--read_mac [mode]', 'Read Mac Info')
  .option('--flash_id [mode]', 'Read Flash ID')
  .parse(process.argv);

if (program.read_mac) {
  ESP.read_mac(program.read_mac, function(result){
    console.log(result.toString());
  });
}

if (program.flash_id) {
  ESP.flash_id(program.flash_id, function(result){
    console.log(result.toString());
  });
}
