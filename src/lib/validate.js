// import local modules
import { configFileExists } from './utils.js';

// function to validate the config file
export async function validate({ configFilePath }) {
  if (!(await configFileExists(configFilePath))) {
  }
}
