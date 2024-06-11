#!/usr/bin/env node

//import genDiff from "../index.js";
import version from '../version.js';
import readFiles from '../parse.js'
import validation from '../validation.js';

import { Command } from 'commander';
const program = new Command();

program
    .name('genDiff')
    .arguments('<filepath1> <filepath1>')
    .description('Compares two configuration files and shows a difference.')
    .version(version, '-V, --version', 'output the version number')
    .option('-f --format [type]', 'output format')
    .helpOption('-h --help', 'output usage information')
    .action((filepath1, filepath2) => {
        if(validation(filepath1) && validation(filepath2)) {
            console.log(readFiles(filepath1));
            console.log(readFiles(filepath2));
        }
        console.log('path:', filepath1, filepath2);
    });
    

program.parse();
