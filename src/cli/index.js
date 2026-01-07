#!/usr/bin/env node

//import local modules
import { generateDocumentation, initializeConfig } from './commands/index.js';
import pkg from '../../package.json' with { type: 'json' };

// import external modules
import { program } from 'commander';

// setup CLI command
program
  .name('docs-gen-openapi')
  .version(pkg.version, '-v, --version', 'Output the current version of docs-gen-openapi')
  .description('A CLI tool to generate documentation from OpenAPI specifications');

// init CLI command
program
  .command('initialize')
  .alias('init')
  .description('Initialize the docs-gen-openapi configuration file')
  .action(initializeConfig);

// generate CLI command
program
  .command('generate')
  .alias('gen')
  .description('Generate documentation following the docs-gen-openapi configuration file')
  .action(generateDocumentation);

// parse CLI arguments
program.parse(process.argv);
