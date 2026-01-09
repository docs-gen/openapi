// import local modules
import { OPEN_API_CONFIG } from './constants.js';
import { readSchemaFile } from './helpers.js';

// import external modules
import Ajv from 'ajv';

// sub-function to validate config file against schema
function validateSchema(configModule, parsedSchema) {
  const ajv = new Ajv({ allErrors: true, strict: true });
  const validate = ajv.compile(parsedSchema);
  return validate(configModule);
}

// function to validate the config file
export async function validate({ configModule }) {
  // basic validation to check required fields
  if (!configModule._internalConfig.openapi)
    throw new Error('Missing openapi version in _internalConfig');

  // get schema file content
  const schemaFileContent = await readSchemaFile({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.CONFIG_DIR,
    openAPIVersion: configModule._internalConfig.openapi,
  });
  if (!schemaFileContent)
    throw new Error(`OpenAPI version ${configModule._internalConfig.openapi} is not supported`);

  // parse schema file content
  const parsedSchema = JSON.parse(schemaFileContent);

  // validate config file against schema
  const validatedSchema = validateSchema(configModule, parsedSchema);
}
