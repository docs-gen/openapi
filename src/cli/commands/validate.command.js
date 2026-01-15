// import local modules
import { OPEN_API_CONFIG } from '../../utils/constants.js';
import { validate } from '../../lib/validate.js';

// import external modules
import path from 'path';

// function to invoke the validation of config file via CLI
export async function validateConfigByCLI() {
  const configFilePath = path.join(process.cwd(), OPEN_API_CONFIG.FILE_NAME);

  // invoke validation
  await validate({ configFilePath });
}
