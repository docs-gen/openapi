// import internal modules
import { OPEN_API_CONFIG } from '../../constants/index.js';

// import external modules
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import util from 'util';
import { confirm, select } from '@inquirer/prompts';

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
    message: `${OPEN_API_CONFIG.FILE_NAME} already exists. Do you want to overwrite the file ?`,
    default: false,
  });
}

// sub-function to select OpenAPI version
async function selectVersion() {
  return await select({
    message: 'Select the OpenAPI version you want to use:',
    choices: OPEN_API_CONFIG.SUPPORTED_OPEN_API_VERSIONS,
  });
}

// sub-function to resolve schema file path and read its content
async function readSchemaFile({ openAPIVersion, __dirname }) {
  const schemaFilePath = path.resolve(
    __dirname,
    `../../schemas/${OPEN_API_CONFIG.SCHEMA_FILES_MAP[openAPIVersion]}`
  );

  return await fs.readFile(schemaFilePath, 'utf-8');
}

// sub-function to generate config file content based on OpenAPI version
function generateFileContent({ openAPIVersion, schemaFileContent }) {
  const versionTypeDefs = OPEN_API_CONFIG.TYPE_DEFS_MAP[openAPIVersion];

  return `/**
 * @type {import('@docs-gen/openapi').${versionTypeDefs}}
 */

export default ${util.inspect(JSON.parse(schemaFileContent), {
    compact: false,
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    sorted: false,
  })};`;
}

// function to initialize a config file
export default async function () {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = process.cwd();
  const configFilePath = path.join(projectRoot, OPEN_API_CONFIG.FILE_NAME);

  // if config file exists and if user does not confirm overwrite, exit
  if ((await configFileExists(configFilePath)) && !(await confirmOverwrite())) return;

  // select OpenAPI version and typeName
  const openAPIVersion = await selectVersion();

  // get schema file content
  const schemaFileContent = await readSchemaFile({ openAPIVersion, __dirname });

  // generate config file content
  const configFileContent = generateFileContent({ openAPIVersion, schemaFileContent });

  // write config file
  await fs.writeFile(configFilePath, configFileContent, 'utf-8');

  console.log(`${OPEN_API_CONFIG.FILE_NAME} has been created successfully at ${configFilePath}`);
}
