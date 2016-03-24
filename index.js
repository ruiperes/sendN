#!/usr/bin/env node

var android = require('./android');
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('android', 'Send notifications for Android')
    .option('k', {
        alias: 'key',
        demand: true,
        describe: "Api key for android",
        type: "string"
    })
    .option('d', {
        alias: 'devices',
        demand: true,
        describe: "Devices list to send notifications",
        type: "array"
    })
    .array('d')
    .option('m', {
        alias: 'message',
        demand: false,
        describe: "Message",
        type: "string"
    })
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2016')
    .argv;


android.sendMessage(argv.key, argv.devices, argv.message);