// import local modules
import { validate } from './validate.js';

// import external modules
import kleur from 'kleur';

// function to generate the docs
export async function generate({ configFilePath }) {
  try {
    // check if configFilePath is provided
    if (!configFilePath) throw new Error('configFilePath is required');

    // validate the config file
    await validate({ configFilePath });
  } catch (error) {
    console.error(
      `${kleur.red('✖')} ${kleur.bold().blue('@docs-gen/openapi:')} ${kleur
        .bold()
        .grey('Error during docs generation:')} ${kleur.red(error.message)}`
    );
  }
}
