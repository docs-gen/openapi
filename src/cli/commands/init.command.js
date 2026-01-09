// import local modules
import { OPEN_API_CONFIG } from '../../constants/index.js';
import { initialize } from '../../lib/initialize.js';

// import external modules
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import { confirm, select } from '@inquirer/prompts';
import kleur from 'kleur';

// sub-function to check if a config file already exists
async function configFileExists(filePath) {
  return await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
}

// sub-function to confirm overwriting an existing config file
async function confirmOverwrite() {
  return await confirm({
    message: `${kleur.blue('@docs-gen/openapi:')} ${kleur.grey(
      `${OPEN_API_CONFIG.FILE_NAME} already exists, do you want to overwrite it?`
    )}`,
    default: false,
  });
}

// sub-function to select OpenAPI version
async function selectVersion() {
  return await select({
    message: `${kleur.blue('@docs-gen/openapi:')} ${kleur.grey(
      'Select the OpenAPI version for your configuration file:'
    )}`,
    choices: OPEN_API_CONFIG.SUPPORTED_OPEN_API_VERSIONS,
  });
}

// function to invoke the initialization of a config file via CLI
export async function initializeConfigByCLI() {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaDir = path.join(__dirname, '../../schemas');
  const projectRoot = process.cwd();
  const configFilePath = path.join(projectRoot, OPEN_API_CONFIG.FILE_NAME);

  // if config file exists and if user does not confirm overwrite, exit
  if ((await configFileExists(configFilePath)) && !(await confirmOverwrite())) return;

  // select OpenAPI version and typeName
  const openAPIVersion = await selectVersion();

  // invoke initialization
  await initialize({ schemaDir, openAPIVersion, configFilePath });

  console.log(
    `${kleur.green('✔')} ${kleur.bold().blue('@docs-gen/openapi:')} ${kleur
      .bold()
      .gray('Config File Initialized:')} ${kleur.dim(path.dirname(configFilePath))}/${kleur.cyan(
      OPEN_API_CONFIG.FILE_NAME
    )}`
  );
}
