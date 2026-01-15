// import local modules
import { OPEN_API_CONFIG } from '../../utils/constants.js';
import { generate } from '../../lib/generate.js';

// import external modules
import path from 'path';

// function to invoke the generation of docs via CLI
export async function generateDocsByCLI() {
  const configFilePath = path.join(process.cwd(), OPEN_API_CONFIG.FILE_NAME);

  // invoke generation
  await generate({ validateFile: true, configFilePath });
}
