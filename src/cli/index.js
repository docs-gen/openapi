#!/usr/bin/env node

//import local modules
import { initializeConfigByCLI } from './commands/init.command.js';
import { validateConfigByCLI } from './commands/validate.command.js';
import { generateDocsByCLI } from './commands/generate.command.js';
import pkg from '../../package.json' with { type: 'json' };

// import external modules
import { program } from 'commander';
import kleur from 'kleur';

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
  .action(initializeConfigByCLI);

// validate CLI command
program
  .command('validate')
  .alias('val')
  .description('Validate the docs-gen-openapi configuration file')
  .action(validateConfigByCLI);

// generate CLI command
program
  .command('generate')
  .alias('gen')
  .description('Generate documentation following the docs-gen-openapi configuration file')
  .option('--validate', 'Validate the configuration before generating documentation', true)
  .option('--no-validate', 'Skip validation of the configuration before generating documentation')
  .action(generateDocsByCLI);

// parse CLI arguments with error handling
program.parseAsync(process.argv).catch(err => {
  if (err.name === 'ExitPromptError')
    console.error(
      `${kleur.red('✖')} ${kleur.bold().blue('@docs-gen/openapi:')} ${kleur
        .bold()
        .grey('Error during prompt execution:')} ${kleur.red('Operation cancelled by the user')}`
    );
});
