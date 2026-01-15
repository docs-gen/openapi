// import local modules
import { validate } from './validate.js';

// function to generate the docs
export async function generate({ validateFile, configFilePath }) {
  // check if configFilePath is provided
  if (!configFilePath) throw new Error('configFilePath is required');

  // validate the config file if validateFile is true
  if (validateFile) await validate({ configFilePath });
}
