// import local modules
import { validate } from './validate.js';

// function to generate the docs
export async function generate({ validateConfigFile, configFilePath }) {
  // check if configFilePath is provided
  if (!configFilePath) throw new Error('configFilePath is required');

  // validate the config file if validateConfigFile is true
  if (validateConfigFile) await validate({ configFilePath });
}
