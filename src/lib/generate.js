// import local modules
import { validate } from './validate.js';

// function to generate the docs
export async function generate({ configFilePath }) {
  // validate the config file
  await validate({ configFilePath });
}
