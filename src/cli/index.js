#!/usr/bin/env node

//import local modules
import { generateDocumentation, initializeConfig } from './commands/index.js';

// import external modules
import { program } from 'commander';

// init CLI command
program
  .command('init')
  .description('Initialize the docs-gen-openapi configuration file')
  .action(initializeConfig);

// generate CLI command
program
  .command('generate')
  .description('Generate documentation from OpenAPI specification')
  .action(generateDocumentation);

// parse CLI arguments
program.parse(process.argv);
