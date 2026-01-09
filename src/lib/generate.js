// import local modules
import { configFileExists } from './utils.js';
import { validate } from './validate.js';

// import external modules
import url from 'url';
import kleur from 'kleur';

// sub-function to load config
async function loadConfig(configFilePath) {
  const configModule = await import(url.pathToFileURL(configFilePath).href);
  return configModule.default;
}

// function to generate the docs
export async function generate({ configFilePath }) {
  try {
    // check if config file exists
    if (!(await configFileExists(configFilePath)))
      throw new Error(`Config file not found at ${configFilePath}`);

    // load config file
    const configModule = await loadConfig(configFilePath);
    if (!configModule) throw new Error('Failed to load config from the file');

    // validate the config module
    await validate({ configModule });
  } catch (error) {
    console.error(
      `${kleur.red('✖')} ${kleur.bold().blue('@docs-gen/openapi:')} ${kleur
        .bold()
        .grey('Error during docs generation:')} ${kleur.red(error.message)}`
    );
  }
}
