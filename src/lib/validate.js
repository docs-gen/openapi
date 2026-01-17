// import local modules
import { OPEN_API_CONFIG } from '../utils/constants.js';
import {
  getSchemaFilePath,
  getSchemaFileContents,
  validateSchema,
  configFileExists,
  loadConfig,
} from '../utils/helpers.js';

// function to validate the config file
export async function validate({ configFilePath } = {}) {
  // check if configFilePath is provided
  if (!configFilePath) throw new Error('configFilePath is required');

  // check if config file exists
  if (!(await configFileExists(configFilePath)))
    throw new Error(`Config file not found at ${configFilePath}`);

  // load config file
  const configModule = await loadConfig(configFilePath);
  if (!configModule) throw new Error('Failed to load config from the file');

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
  const { validationResult, validationErrors } = await validateSchema({
    validationModule: configModule,
    moduleSchema: JSON.parse(openAPISchemaFileContents),
    additionalSchemas: [JSON.parse(commonConfigSchemaFileContents)],
  });

  // if not valid, log errors
  if (!validationResult)
    throw new Error(
      validationErrors
        .filter(vErr => vErr.keyword === 'errorMessage')
        .map(vErr => `\n ↪ ${vErr.message.trim()}`)
    );
}
