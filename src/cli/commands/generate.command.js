// import local modules
import { generate } from '../../lib/generate.js';

// function to invoke the generation of docs via CLI
export async function generateDocsByCLI() {
  const projectRoot = process.cwd();
  const configFilePath = path.join(projectRoot, OPEN_API_CONFIG.FILE_NAME);

  // invoke generation
  await generate({ configFilePath });
}
