#!/usr/bin/env node

//import genDiff from "../index.js";


import { Command } from 'commander';
const program = new Command();

const version = "0.1.0";

program
    .name('genDiff')
    .arguments('<filepath1> <filepath1>')
    .description('Compares two configuration files and shows a difference.')
    .version(version, '-v, --version', 'output the version number')
    .option('-f --format [type]', 'output format')
    .helpOption('-h --help', 'output usage information');
    

program.parse(process.argv);
