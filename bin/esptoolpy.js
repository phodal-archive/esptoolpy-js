#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var ESP = require('../esptoolpy');

program
  .version('0.0.1')
  .option('-m, --read_mac [mode]', 'Read Mac Info')
  .parse(process.argv);

if (program.read_mac) {
  ESP.read_mac(program.read_mac, function(result){
    console.log(result.toString());
  });
  //console.log(result);
}
