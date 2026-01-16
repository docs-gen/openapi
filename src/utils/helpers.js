// import local modules
import { OPEN_API_CONFIG } from './constants.js';

// import external modules
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';
import util from 'util';
import kleur from 'kleur';
import { confirm, select } from '@inquirer/prompts';

// function to check if a config file already exists
export async function configFileExists(filePath) {
  return await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
}

// function to confirm overwriting an existing config file
export async function confirmOverwrite() {
  return await confirm({
    message: `${kleur.blue('@docs-gen/openapi:')} ${kleur.grey(
      `${OPEN_API_CONFIG.FILE_NAME} already exists, do you want to overwrite it?`
    )}`,
    default: false,
  });
}

// function to select OpenAPI version
export async function selectVersion() {
  return await select({
    message: `${kleur.blue('@docs-gen/openapi:')} ${kleur.grey(
      'Select the OpenAPI version for your configuration file:'
    )}`,
    choices: OPEN_API_CONFIG.SUPPORTED_OPEN_API_VERSIONS,
  });
}

// function to resolve and get schema file path
export function getSchemaFilePath({ dirName, fileName }) {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaDir = path.join(__dirname, `./schemas/${dirName}`);
  return path.resolve(schemaDir, fileName);
}

// function to get schema file contents
export async function getSchemaFileContents({ schemaFilePath }) {
  return await fs.readFile(schemaFilePath, 'utf-8');
}

// function to generate config file contents
export function generateConfigFileContents({ schemaFileContents, typeDefVersion }) {
  return `/**
 * @type {import('@docs-gen/openapi').${typeDefVersion}}
 *
 * ⚠ IntelliSense Notice
 *
 * Type suggestions, auto-completion, and hover information require IntelliSense,
 * which only works if the package is installed locally:
 *
 * Run the following command in your project root:
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │                                                              │
 * │               npm install -D @docs-gen/openapi               │
 * │                                                              │
 * └──────────────────────────────────────────────────────────────┘
 *
 * If you are using this tool via npx, the configuration will still work,
 * but your editor won't be able to provide IntelliSense.
 */

export default ${util.inspect(JSON.parse(schemaFileContents), {
    compact: false,
    depth: null,
    maxArrayLength: null,
    maxStringLength: null,
    sorted: false,
  })};`;
}

// function to load config
export async function loadConfig(configFilePath) {
  const configModule = await import(url.pathToFileURL(configFilePath).href);
  return configModule.default;
}

// function to validate module against its schema
export async function validateSchema({ validationModule, moduleSchema, additionalSchemas }) {
  // create new ajv instance and add plugins
  const ajvInstance = new Ajv({ allErrors: true, strict: true });
  addFormats(ajvInstance);
  ajvErrors(ajvInstance);

  // add additionalSchemas to ajv instance (if any)
  if (additionalSchemas && additionalSchemas.length > 0)
    additionalSchemas.forEach(additionalSchema => ajvInstance.addSchema(additionalSchema));

  // compile moduleSchema
  const compiledModuleSchema = ajvInstance.compile(moduleSchema);

  // validate module against compiledModuleSchema
  const validationResult = compiledModuleSchema(validationModule);

  // return validation result and errors (if any)
  return { validationResult, validationErrors: compiledModuleSchema.errors };
}
