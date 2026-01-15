// import external modules
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import ajvErrors from 'ajv-errors';

// function to check if a config file already exists
export async function configFileExists(filePath) {
  return await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);
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
