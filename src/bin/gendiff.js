#!/usr/bin/env node

//import genDiff from "../index.js";
import version from '../version.js';

import { Command } from 'commander';
const program = new Command();

program
    .name('genDiff')
    .arguments('<filepath1> <filepath1>')
    .description('Compares two configuration files and shows a difference.')
    .version(version, '-V, --version', 'output the version number')
    .option('-f --format [type]', 'output format')
    .helpOption('-h --help', 'output usage information');
    

program.parse();
