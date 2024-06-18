#!/usr/bin/env node

import genDiff from "../index.js";
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
            const file1 = JSON.parse(readFiles(filepath1));
            const file2 = JSON.parse(readFiles(filepath2));
            console.log(genDiff(file1, file2));
        }
        console.log('path:', filepath1, filepath2);
    });
    

program.parse();
