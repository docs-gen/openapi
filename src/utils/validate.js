// import local modules
import { OPEN_API_CONFIG } from './constants.js';
import { getSchemaFilePath, getSchemaFileContents, validateSchema } from './helpers.js';

// function to validate the config file
export async function validate({ configModule }) {
  // check if openapi version is present
  if (!configModule._internalConfig.openapi) throw new Error('Missing _internalConfig.openapi');

  // check if openapi version is supported
  if (
    !Object.values(OPEN_API_CONFIG.SUPPORTED_OPEN_API_VERSIONS)
      .map(v => v.value)
      .includes(configModule._internalConfig.openapi)
  )
    throw new Error('Unsupported _internalConfig.openapi');

  // get openapi version schema file path
  const openAPISchemaFilePath = getSchemaFilePath({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.CONFIG_DIR,
    fileName: OPEN_API_CONFIG.SCHEMA_FILES_MAP[configModule._internalConfig.openapi],
  });

  // get openapi version schema file contents
  const openAPISchemaFileContents = await getSchemaFileContents({
    schemaFilePath: openAPISchemaFilePath,
  });

  // get definitions config schema file path
  const definitionsConfigSchemaFilePath = getSchemaFilePath({
    dirName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.DEFINITIONS_DIR,
    fileName: OPEN_API_CONFIG.SCHEMA_FILES_MAP.definitions_config,
  });

  // get definitions config schema file contents
  const definitionsConfigSchemaFileContents = await getSchemaFileContents({
    schemaFilePath: definitionsConfigSchemaFilePath,
  });

  // validate configModule against its schema
  return await validateSchema({
    validationModule: configModule,
    moduleSchema: JSON.parse(openAPISchemaFileContents),
    additionalSchemas: [JSON.parse(definitionsConfigSchemaFileContents)],
  });
}
