// import external modules
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import Ajv from 'ajv';

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

// function to validate module against its schema
export async function validateSchema({ validationModule, moduleSchema, additionalSchemas }) {
  // create ajv instance
  const ajv = new Ajv({ allErrors: true, strict: true });

  // add additional schemas to ajv instance if any
  if (additionalSchemas && additionalSchemas.length > 0)
    additionalSchemas.forEach(schema => ajv.addSchema(schema));

  // compile schema
  const validate = ajv.compile(moduleSchema);

  // validate module against schema
  return validate(validationModule);
}
