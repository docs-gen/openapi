// import local modules
import { OPEN_API_CONFIG } from './constants.js';
import { getSchemaFilePath, getSchemaFileContents, validateSchema } from './helpers.js';

// function to validate the config file
export async function validate({ configModule }) {
  // check if openapi version is present
  if (!configModule._internalConfig.openapi)
    throw new Error('Missing openapi version in _internalConfig');

  // get openapi version schema file path
  const openAPISchemaFilePath = getSchemaFilePath({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.CONFIG_DIR,
    fileName: OPEN_API_CONFIG.SCHEMA_FILES_MAP[configModule._internalConfig.openapi],
  });

  // get openapi version schema file contents
  const openAPISchemaFileContents = await getSchemaFileContents({
    schemaFilePath: openAPISchemaFilePath,
  });

  // get common config schema file path
  const commonConfigSchemaFilePath = getSchemaFilePath({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.COMMON_DIR,
    fileName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.common_config,
  });

  // get common config schema file contents
  const commonConfigSchemaFileContents = await getSchemaFileContents({
    schemaFilePath: commonConfigSchemaFilePath,
  });

  // validate configModule against its schema
  return await validateSchema({
    validationModule: configModule,
    moduleSchema: JSON.parse(openAPISchemaFileContents),
    additionalSchemas: [JSON.parse(commonConfigSchemaFileContents)],
  });
}
